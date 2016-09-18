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
	var display = songs[i].replace(/[>]/g, "-").replace(/[*,@,!,(]/g, "")
	console.log(display)
	output.innerHTML += "<h4>" + display + "</h4>"
}