var songs = [];
var output = document.getElementById("output");

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

for (var i = 0; i < songs.length; i++) {
  output.innerHTML += "<div>" + songs[i] + "</div"
}

console.log(output.innerHTML)




// Music History Part 2

// Use JavaScript arrays, loops, and innerHTML to show the music you love.

// Students must use JavaScript to create a list of songs in the index.html file for their Music History project. Have them download the songs.js file, which contains an array of strings with song information.

// Each student must add one song to the beginning and the end of the array.
// Loop over the array and remove any words or characters that obviously don't belong.
// Students must find and replace the > character in each item with a - character.
// Must add each string to the DOM in index.html in the main content area.

// {Song name} by {Artist} on the album {Album}
// Merging your branch

// After you've got all of the requirements completed, follow these steps.

// In your musichistory directory, enter the command git checkout master. This switches you back to the master branch.
// git merge -X theirs version2
// If you see a vim screen with a default message in it just :x to save and exit.
// Your branch is now merged into the master branch and you can push the master branch up to Github with git push origin master.