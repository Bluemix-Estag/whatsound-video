var express = require("express");
var app = express();
var cfenv = require("cfenv");
var bodyParser = require('body-parser');
var request = require('request');
var Youtube = require('youtube-node');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

var mydb;

var youtube = new Youtube();
youtube.setKey('AIzaSyAefXlqPuKq7rU6PDrsZ2NnpS3fajTLA3M');

app.get('/whatsound/api/v1/youtube/clip/values', function (req, res) {
    var query = req.query.query;
    console.log(query);
    youtube.search(query, 2, function (error, result) {
        if (error) {
            console.log(error);
            res.send(error);
        } else {
            if(result.pageInfo.totalResults == 0){
                var response = {
                    "error": {
                        "code": 10,
                        "message": "Vídeo não encontrado",
                        "status": false
                    }
                }
                res.send(response);
            }else{
                var response = {
                    "id": JSON.stringify(result['items'][0]['id']['videoId']).replace(new RegExp('\\"', "g"), ""),
                    "iframe_url": "https://www.youtube.com/embed/" + JSON.stringify(result['items'][0]['id']['videoId']).replace(new RegExp('\\"', "g"), ""),
                    "thumbnail": "https://i.ytimg.com/vi/"+JSON.stringify(result['items'][0]['id']['videoId']).replace(new RegExp('\\"', "g"), "")+"/default.jpg",
                    "url": "https://www.youtube.com/watch?v=" + JSON.stringify(result['items'][0]['id']['videoId']).replace(new RegExp('\\"', "g"), ""),
                    "title": result['items'][0]['snippet']['title']
                }
                res.send(response);
            }
        }
    })
});








// load local VCAP configuration  and service credentials
var vcapLocal;
try {
    vcapLocal = require('./vcap-local.json');
    console.log("Loaded local VCAP", vcapLocal);
} catch (e) {}

const appEnvOpts = vcapLocal ? {
    vcap: vcapLocal
} : {}

const appEnv = cfenv.getAppEnv(appEnvOpts);

if (appEnv.services['cloudantNoSQLDB']) {
    // Load the Cloudant library.
    var Cloudant = require('cloudant');

    // Initialize database with credentials
    var cloudant = Cloudant(appEnv.services['cloudantNoSQLDB'][0].credentials);

    //database name
    var dbName = 'mydb';

    // Create a new "mydb" database.
    cloudant.db.create(dbName, function (err, data) {
        if (!err) //err if database doesn't already exists
            console.log("Created database: " + dbName);
    });

    // Specify the database we are going to use (mydb)...
    mydb = cloudant.db.use(dbName);
}

//serve static file (index.html, images, css)
app.use(express.static(__dirname + '/views'));



var port = process.env.PORT || 3000
app.listen(port, function () {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
