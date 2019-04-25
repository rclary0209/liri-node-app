require("dotenv").config();

// Make it so liri.js can take in one of the following commands:
// spotify-this-song
// This will show the following information about the song
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// If no song is provided then your program will default 
// to "The Sign" by Ace of Base.


var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var Spotify = require("node-spotify-api");
// // spotify-this-song 
// spotify
  search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });
