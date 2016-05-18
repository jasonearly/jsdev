$.ajax({
	type: 'GET',
	url: 'http://api.openweathermap.org/data/2.5/weather?zip=60647,us&APPID=aa03e03b0f01411758a535d4ed1b2492',
	success: function(data) {
		$('#temp').html(Math.floor(data.main.temp * 9/5 - 459.67));
		$('#city').html(data.name);

	}
});



$(function (get_data) {
  var Data = $.ajax({
		type: 'GET',
		url: 'http://api.openweathermap.org/data/2.5/weather?zip=60647,us&APPID=aa03e03b0f01411758a535d4ed1b2492',
		 success: function(Data) {
        console.log(Data)
	}});

  //{name:"Nike", price:199.00 };

   //Get the HTML from the template   in the script tag​
  var theTemplateScript = $('#temp-template').html();

   //Compile the template​
  var theTemplate = Handlebars.compile (theTemplateScript);
  $('#weather').append(theTemplate(get_data));

//We pass the object to the compiled handleBars function​
// The function will insert all the values from the objects in their respective places in the HTML and returned HTML as a string.
//Then we use jQuery to append the resulting HTML string into the page​
});




