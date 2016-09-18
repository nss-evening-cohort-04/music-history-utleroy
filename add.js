//added for version 3
var newSong = document.getElementById("song-title")
var newAlbum = document.getElementById("album")
var newArtist = document.getElementById("artist")
var	userAddedMusic = [];

var addButton = document.getElementById("add-music");

addButton.addEventListener("click", function newMusic (userAddedMusic) {
	userAddedMusic = "<h4>" + newSong.value + " - by " + newArtist.value + "on the album " + newAlbum.value + "</h4>";
	output.innerHTML += userAddedMusic;
	console.log("added song, album and artist: ", userAddedMusic);
});
//added for version 3