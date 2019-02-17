require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");

// console.log(process.argv.slice(3));

var command = process.argv[2]
var input = process.argv.slice(3).join(" ")
console.log(input)
if (command === "spotify-this-song") {
    spotify.search({
        type: 'track',
        query: input
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data);
        console.log(data.tracks.items[0])
    });
} else if (command === "concert-this") {
    axios({
            method: 'get',
            url: 'https://rest.bandsintown.com/artists/' + input + '/events?app_id=codingbootcamp'
        })
        .then(function (response) {
            console.log(response.data)
        });
} else if (command === "movie-this") {
    axios({
            method: 'get',
            url: 'http://www.omdbapi.com/?t=' + input + '&apikey=trilogy'
        })
        .then(function (response) {
            // console.log(response.data);
            console.log(response.data.Title)
        })
}
