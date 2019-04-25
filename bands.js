//npm i axios
var axios = require("axios");
var artist = process.argv[2];
// concert-this
axios.get ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
  function(response) {
    console.log(response.data)
  })
