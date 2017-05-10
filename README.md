# WhatSound Video MicroService



Endpoint to get a JSON object from Youtube as response

REST API to GET video clip:

```
    GET https://video-api.mybluemix.net/v1/youtube/clip?query=NAME_OF_DESIRED_MUSIC_VIDEO
```

Sending a String query with name of desired music video and receive a JSON as response

# Response for 

```
GET https://video-api.mybluemix.net/v1/youtube/clip?query=Shape%20of%20you
```


```
 {
    "id": "JGwWNGJdvx8",
    "iframe_url": "https://www.youtube.com/embed/JGwWNGJdvx8",
    "thumbnail": "https://i.ytimg.com/vi/JGwWNGJdvx8/default.jpg",
    "url": "https://www.youtube.com/watch?v=JGwWNGJdvx8",
    "title": "Ed Sheeran - Shape of You [Official Video]"
 }

```



