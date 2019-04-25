This app is your entertainment information Guru. You can search Spotify, Bands in Town and OMDB for information on movies, live performances, and music. The value of this app is that it pulls data from all three of these API from just one app!

If you type: node liri.js spotify-this (and enter a song name), Liri will gather the data from Spotify and output the song's name, link to it on Spotify, and the name of the album it's from. If the user input is blank and looks like this: node liri.js spotify this, it will default to "The Sign" by Ace of Base.
Visual examples can be accessed here [Spotify-this Image](spotify-this.png).



Liri will also access concert information from the bands in my town API. If you type node liri.js concert-this (band name here). Liri will pull information on your favorite artists such as when they are performing next, the venue name, and its' location. Visual examples found here, [Concert-this Image](concert-this.png).
 

And finally, Liri pulls movie information from the IMDB database. For any movie you input (node liri.js (insert movie name here)), Liri will give you the: title of the movie, year it was released, rating, the Country where it was produced, its' language, plot, and cast information. If you forget to input a movie, the data defaults to "Mr. Nobody." Visual exemplification can be found in the [Movie-this Image](movie-this.png). 

