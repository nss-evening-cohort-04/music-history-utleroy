
var currentSong;
  var songsToDOM = [];

  function loadSongs () {
    var songElement = document.getElementById("output");
    songData = JSON.parse(this.response);
      for (var i = 0; i < songData.songs.length; i++) {
        currentSong = songData.songs[i];
        console.log(songData);

        songsToDOM += `<h4>`
        	songsToDOM += `${currentSong.title} - by `;
        	songsToDOM += `${currentSong.artist} on the album `;
        	songsToDOM += `${currentSong.album}`;
        	songsToDOM += `<button id="remove">delete</button>`
        songsToDOM += `</h4>`

      }
        songElement.innerHTML = songsToDOM;


  console.log(songsCall);
  }

  var songsCall = new XMLHttpRequest();
  songsCall.addEventListener("load", loadSongs)
  songsCall.open("GET", "songs.JSON");
  songsCall.send();

// var deleteBtn = document.getElementById("remove");
// deleteBtn.addEventListener("click", function deleteMsg(){
// 	currentSong.parentNode.removeChild(currentSong);
// })

// Add delete button DOM to each row and, when it is clicked, delete the entire row in the DOM.
// Part Two

// Take your music and split it into two JSON file instead of them all living on one file.
// Add a button at the bottom of your music list and label it "More >".
// Load the data from the first list and inject the DOM into the document as you've already done.
// When the user clicks that button, load the songs from the second JSON file and append them to the bottom of the existing music, but before the More button.