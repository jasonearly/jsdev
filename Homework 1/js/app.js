var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var startupY = ['farmers', 'astronauts', 'children', 'programmers', 'students', 'dogs', 'teachers'];


var favorites = [];
var pitches = [];


function displayPitch() {

		var random1 = Math.floor((Math.random() * startupX.length));
		var random2 = Math.floor((Math.random() * startupY.length));

		var pitch = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];


		document.getElementById('xForY').innerHTML = pitch;
		pitches.push(pitch);
	}

function saveFavorite() {
		var favs = document.getElementById('xForY').innerHTML;

		favorites.push(favs);

		document.getElementById('favorites').innerHTML += favorites[favorites.length - 1] + '<br>';
	}
