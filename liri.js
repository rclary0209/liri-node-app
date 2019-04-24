// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");
var movieName = process.argv[2];
// Then run a request with axios to the OMDB API with the movie specified
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
    
      
   