# WhatSound Video MicroService



Endpoint to get a JSON object from Youtube as response

REST API to GET video clip:

```
    GET https://video-api.mybluemix.net/whatsound/api/v1/youtube/clip/values?query=NAME_OF_DESIRED_MUSIC_VIDEO
```

Sending a String query with name of desired music video and receive an Array of JSON as response

# Response for 

```
GET https://video-api.mybluemix.net/whatsound/api/v1/youtube/clip/values?query=Shape%20of%20you
```


```
Returns 2 options
 [
  {
    "id": "JGwWNGJdvx8",
    "iframe_url": "https://www.youtube.com/embed/JGwWNGJdvx8",
    "thumbnail": "https://i.ytimg.com/vi/JGwWNGJdvx8/default.jpg",
    "url": "https://www.youtube.com/watch?v=JGwWNGJdvx8",
    "title": "Ed Sheeran - Shape of You [Official Video]"
  },
  {
    "id": "_dK2tDK9grQ",
    "iframe_url": "https://www.youtube.com/embed/_dK2tDK9grQ",
    "thumbnail": "https://i.ytimg.com/vi/_dK2tDK9grQ/default.jpg",
    "url": "https://www.youtube.com/watch?v=_dK2tDK9grQ",
    "title": "Ed Sheeran - Shape Of You [Official Lyric Video]"
  }
]

```



