require("dotenv").config();
// Make it so liri.js can take in one of the following commands:
// movie-this
// If the user doesn't type a movie in, 
// the program will output data for the movie 'Mr. Nobody.'
// If you haven't watched "Mr. Nobody," 
// then you should: http://www.imdb.com/title/tt0485947/
// It's on Netflix!



var axios = require("axios");
var movieName = process.argv[2];
axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
      console.log([
          "Title of the move: " + response.data.Title,
          "Year movie was released: " + response.data.Year,
          "Movie Rating: " + response.data.Rated,
          "Movie produced in: " + response.data.Country,
          "Movie language: " + response.data.Language,
          "Movie plot: " + response.data.Plot,
          "Actors in movie: " + response.data.Actors]
        )})