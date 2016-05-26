'use strict';
/*
  Please add all Javascript code to this file.
*/
$(window).on('load', function(){
    $('#popUp a').removeClass('closePopUp');
    $('#popUp').removeClass('hidden');
  });

//Loads data feed

// $.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", function(results) {
//     console.log(results);
//     results.data.feed.forEach(function(result) {
//         $("#main").append('<article class="article"><section class="featuredImage"><img src="' + result.content.media.images[0].url + '" alt="" /></section><section class="articleContent"><a href="' + result.content.url + '"><h3>' + result.content.title + '</h3></a><h6>' + result.content.tags[0].display + '</h6></section><section class="impressions">' + result.diggs.count + '</section><div class="clearfix"></div></article>')
//     })
// })


$.ajax({
    type: 'GET',
    url: 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json',
    success: function(results) {
        results.data.feed.forEach(function(result) {
            $("#main").append('<article class="article"><section class="featuredImage"><img src="' + result.content.media.images[0].url + '" alt="" /></section><section class="articleContent"><a href="' + result.content.url + '"><h3>' + result.content.title + '</h3></a><h6>' + result.content.tags[0].display + '</h6></section><section class="impressions">' + result.diggs.count + '</section><div class="clearfix"></div></article>')
        })
        $('#popUp').addClass('hidden');
    }
});

//Feed rules
//1. When the application first loads display the loading container (see below on instructions to toggle this).
//DONE



//2. When you successfully retrieve information from the default API hide the loader and replace the content of the #main container with that of the API. The DOM structure of each article must adhere to the .article structure.
//DONE

   //     $(document).ready(function() {
   //    $('#popUp').addClass('hidden');
   //    console.log('Popup loaded then was hidden');
   // });



//When the user selects an article's title show the #popUp overlay. The content of the article must be inserted in the .container class inside #popUp.

//Make sure you remove the .loader class when toggling the article information in the pop-up.


//Change the link of the "Read more from source" button to that of the respective article.

//When the user selects a source from the dropdown menu on the header,
//replace the content of the page with articles from the newly selected source.

// $().on('click' function(){
//     hide current data source
//     load/display new data source
// });


//Display the loading pop up when the user first selects the new source, and hide it on success.


//Add an error message (either alert or a notification on the page) if the app cannot load from the selected feed.



//UI interactions
//When the user clicks/taps the search icon, expand the input box. Best approach for this is to toggle the .active class for the #search container. If the search input box is already expanded tapping the search icon again will close the input.

$('#search_button').click(function() {
    $('#search').toggleClass('active');
});

//Pressing the "Enter" key should also close the opened input box. See Bonus 2 for search filtering functionality.
//press enter on text area..

$(document).keypress(function(e) {
    if (e.which === 13) {
        $('#search').removeClass('active');
    }
});



//When the app is first loading and when the user selects to load a new feed from the dropdown, display the #popUp container with the .loader class. You can toggle the .hidden class from the container to display/hide the overlay container.

//trigger with keypress for test
$(document).keypress(function(e) {
    //needs to be on page load
    if (e.which === 49) {
        $('#popUp').toggleClass('hidden');
    }
});


//Add functionality to hide the pop-up when user selects the "X" button on the pop-up.
$('.closePopUp').click(function() {
    $('#popUp').addClass('hidden');
});


//Clicking/tapping the "Feedr" logo will display the main/default feed.



