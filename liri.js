require("dotenv").config();

// Make it so liri.js can take in one of the following commands:

// do-what-it-says

// movie-this
// var axios = require("axios");
// var movieName = process.argv[2];
// axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy").then(
//   function(response) {
//       console.log([
//           "Title of the move: " + response.data.Title,
//           "Year movie was released: " + response.data.Year,
//           "Movie Rating: " + response.data.Rated,
//           "Movie produced in: " + response.data.Country,
//           "Movie language: " + response.data.Language,
//           "Movie plot: " + response.data.Plot,
//           "Actors in movie: " + response.data.Actors]
//         )})
//     ______________________________________________________________________

// var axios = require("axios");
// var artist = process.argv[2];
// concert-this
// axios.get ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
//   function(response) {
//     console.log(response.offers.name)
//   })

// var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
// var Spotify = require("node-spotify-api");
// // spotify-this-song 
// spotify
//   .search({ type: 'track', query: 'All the Small Things' })
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });