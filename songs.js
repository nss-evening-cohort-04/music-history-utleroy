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
output.innerHTML += redo
  }

// Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM.
// Merging

// Remember to merge the version-3 branch back into master when you're done.