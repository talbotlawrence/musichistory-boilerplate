var songs = [];

songs[0] = "Legs > by Z*ZTop on the album Eliminator";
songs[1] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[2] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[3] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[4] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

//beginning
songs.unshift("Video Killed the Radio Star");
//end
songs.push("Let's Go");		//this is a song by The Cars in case you kids are reading my code :)!!!

//remove unsavory characters and throw in the DOM
var showMe = document.getElementById("myArray");

for (var i = 0; i < songs.length; i++) {
	var myRegEx = /[*@(!]/g;
	songs[i] = songs[i].replace(myRegEx, '');
	songs[i] = songs[i].replace('>', '-');
	showMe.innerHTML = `
		<p>${songs}</p>
	`;
};

console.log("songs: ", songs);