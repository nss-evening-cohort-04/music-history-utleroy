var output = document.getElementById("output");
var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("Big Red Car - by The Wiggles on the album Toot Toot");
songs.unshift("Walk - by Pantera on the album Vulgar Display Of Power")


  for (var i = 0; i < songs.length; i++) {
    var redo = songs[i].replace(/[>]/g, "-").replace(/[*,@,!,(]/g, "")
    console.log(redo)
output.innerHTML += "<h2>Song, Artist, Album</h2><div>" + redo + "</div>"
  }

// Music History Part 3

// Setup

// These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below and paste. It doesn't matter what directory you are currently in.

// cd ~/workspace/musichistory
// git checkout -b version-3
// Instructions

// Time to make Music History into a single page application. Before you begin please review the sample code I provided in JavaScript 103 about building a simple SPA.

// In the navigation bar, make sure you have two links labeled "List Music", and "Add Music".
// Add a DOM element that contains some input fields for the user to enter in the name of a song, the artist for the song, and the album. You do not need to enclose them in a <form> element because we're not actually submitting this form anywhere.
// Add a <button> element at the bottom of the input fields labeled "Add".
// The input fields and the add button make up the Add Music View.
// The existing view - the combination of the filter form and the song list - will be referred to as the List Music View.
// The Add Music View should not appear when the user first visits your page. The song list with the corresponding filter form should be visible.
// When the user clicks on "Add Music" in the navigation bar, the List Music View should be hidden, and the Add Music View should be shown (see example wireframe).
// When the user clicks on "List Music" in the navigation bar, the Add Music View should be hidden, and the List Music View should be shown (see example wireframe).
// Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM.
// Merging

// Remember to merge the version-3 branch back into master when you're done.