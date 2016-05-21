$.ajax({
	type: 'GET',
	url: 'http://api.openweathermap.org/data/2.5/weather?zip=60647,us&APPID=aa03e03b0f01411758a535d4ed1b2492',
	success: function(data) {
		$('#temp').html(Math.floor(data.main.temp * 9/5 - 459.67));
		$('#city').html(data.name);

	}
});



// $(function (get_data) {
//   var Data =
//   });


 //  $.ajax({
	// 	type: 'GET',
	// 	url: 'http://api.openweathermap.org/data/2.5/weather?zip=60647,us&APPID=aa03e03b0f01411758a535d4ed1b2492',
	// 	 //pass the success/return into a var. (review solution)
	// 	success: function(response) {
 //        console.log(response);
	// 		}
	// });


//Attempt at Handlebars solution
//Helper to convert temp from kelvin to fahrenheight
Handlebars.registerHelper('toFahrenheight', function(kelvin) {
	return ((kelvin - 273) * (9/5) + 32).toFixed(1) + '\u00B0F';
});

//Creates template data to pass to placeholder
function processHandlebarsTemplate(templateId, data) {
	var templateSource = $('#' + templateId).html();
	var compiledTemplate = Handlebars.compile(templateSource);

	return compiledTemplate(data);
}

//gets data from the api and puts together with template id
$.ajax({
	type: 'GET',
	url: 'http://api.openweathermap.org/data/2.5/weather?zip=60647,us&APPID=e0348244f8198c705d7e3a4d429a4e93',
	success: function(response) {
		var weatherHtml = processHandlebarsTemplate('temp-template', response);
		$('#weather').html(weatherHtml);
	}
});


 // Notes on Handlebars
 // Get the HTML from the template   in the script tag​
 // var theTemplateScript = $('#temp-template').html();

 //Compile the template​
 //  var theTemplate = Handlebars.compile (theTemplateScript);
 //  $('#weather').append(theTemplate(response));

//We pass the object to the compiled handleBars function​
// The function will insert all the values from the objects in their respective places in the HTML and returned HTML as a string.
//Then we use jQuery to append the resulting HTML string into the page​


// //solution via Gordo
// Handlebars.registerHelper('toFahrenheight', function(kelvin) {
// 	return ((kelvin - 273) * (9/5) + 32).toFixed(1) + '\u00B0F'
// })

// // This uses a library called moment.js
// Handlebars.registerHelper('formatDate', function(dateText) {
// 	return moment(dateText).format('dddd MMM Do [at] ha');
// })

// function processHandlebarsTemplate(templateId, data) {
// 	var templateSource = $('#' + templateId).html();
// 	var compiledTemplate = Handlebars.compile(templateSource);

// 	return compiledTemplate(data);
// }

// $.ajax({
// 	type: 'GET',
// 	url: 'http://api.openweathermap.org/data/2.5/forecast?zip=60657,us&APPID=e0348244f8198c705d7e3a4d429a4e93',
// 	success: function(response) {
// 		var weatherHtml = processHandlebarsTemplate('forecast', response);
// 		$('#weather').html(weatherHtml);
// 	}
// })

