require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require('moment');
moment().format();

var Spotify = require("node-spotify-api");
var clientSpotify = new Spotify(keys.spotify);

// Make it so liri.js can take in one of the following commands:
var command = process.argv[2];
var searchTerm = process.argv.splice(3).join(" ");

function CallLiri(com, term){
    switch (com) {
        case "movie-this":
            searchOMDB(term);
            break;
    
        case "spotify-this":
            searchSpotify(term);
            break;
    
        case "concert-this":
            searchConcert(term);
            break;

        default:
            console.log("Please type a valid command");
            break;
    }
}

CallLiri(command, searchTerm);

function searchSpotify(term){
    clientSpotify.search({ type: 'track', query: term  ? term : "The Sign" }, function(err, data){
      console.log(data.tracks.items[0].name);
      console.log(data.tracks.items[0].artists[0].name);
      console.log(data.tracks.items[0].href);
      console.log(data.tracks.items[0].album.name);

    })
}
function searchConcert(term){
    axios.get ("https://rest.bandsintown.com/artists/" + (term ? term : "Nickelback") + "/events?app_id=codingbootcamp").then(
      function(response) {
        console.log(response.data[0].lineup[0])
        console.log(response.data[0].venue.name)
        console.log(moment(response.data[0].datetime, "hh:mm").format("MM/DD/YYYY"))
      })
  }

// var movieName = ""
function searchOMDB(term){
    axios.get("http://www.omdbapi.com/?t=" + (term ? term : "Mr Nobody") + "&y=&plot=short&apikey=trilogy").then(
        function(response) {
          console.log([
            "Title of the move: " + response.data.Title,
            "Year movie was released: " + response.data.Year,
            "Movie Rating: " + response.data.Rated,
            "Movie produced in: " + response.data.Country,
            "Movie language: " + response.data.Language,
            "Movie plot: " + response.data.Plot,
            "Actors in movie: " + response.data.Actors])
     })
}
