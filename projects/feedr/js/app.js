/*
  Please add all Javascript code to this file.
*/


//Feed rules
//When the application first loads display the loading container (see below on instructions to toggle this).
//When you successfully retrieve information from the default API hide the loader and replace the content of the #main container with that of the API. The DOM structure of each article must adhere to the .article structure.



//When the user selects an article's title show the #popUp overlay. The content of the article must be inserted in the .container class inside #popUp.
//Make sure you remove the .loader class when toggling the article information in the pop-up.


//Change the link of the "Read more from source" button to that of the respective article.

//When the user selects a source from the dropdown menu on the header,
//replace the content of the page with articles from the newly selected source.

//Display the loading pop up when the user first selects the new source, and hide it on success.


//Add an error message (either alert or a notification on the page) if the app cannot load from the selected feed.



//UI interactions
//When the user clicks/taps the search icon, expand the input box. Best approach for this is to toggle the .active class for the #search container. If the search input box is already expanded tapping the search icon again will close the input.

	$('#search_button').click(function(){
		$('#search').toggleClass('active');
	});

	//Pressing the "Enter" key should also close the opened input box. See Bonus 2 for search filtering functionality.
  //press enter on text area..

	$(document).keypress(function(e) {
    if(e.which === 13) {
      $('#search').removeClass('active');
    }
	});



//When the app is first loading and when the user selects to load a new feed from the dropdown, display the #popUp container with the .loader class. You can toggle the .hidden class from the container to display/hide the overlay container.

//trigger with keypress for test
$(document).keypress(function(e) {
	//needs to be on page load
    if(e.which === 49) {
      $('#popUp').toggleClass('hidden');
    }
	});


//Add functionality to hide the pop-up when user selects the "X" button on the pop-up.
$('.closePopUp').click(function(){
		$('#popUp').addClass('hidden');
	});


//Clicking/tapping the "Feedr" logo will display the main/default feed.






















