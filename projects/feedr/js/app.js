'use strict';
/*
  Please add all Javascript code to this file.
  */

var redditLogo = "https://camo.githubusercontent.com/b13830f5a9baecd3d83ef5cae4d5107d25cdbfbe/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f3732313033382f313732383830352f35336532613364382d363262352d313165332d383964312d3934376632373062646430332e706e67";
var googleNews = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png";

$(window).on('load', function() {
    $('#popUp a').hide();
    $('#popUp').removeClass('hidden');
});

//Loads data feed
//DONE

// $.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", function(results) {
//     console.log(results);
//     results.data.feed.forEach(function(result) {
//         $("#main").append('<article class="article"><section class="featuredImage"><img src="' + result.content.media.images[0].url + '" alt="" /></section><section class="articleContent"><a href="' + result.content.url + '"><h3>' + result.content.title + '</h3></a><h6>' + result.content.tags[0].display + '</h6></section><section class="impressions">' + result.diggs.count + '</section><div class="clearfix"></div></article>')
//     })
// })

$(function initialDigg() {
$.ajax({
    type: 'GET',
    url: 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json',
    success: function(results) {
        results.data.feed.forEach(function(result) {

            //HANDLBARS THIS
            $("#main").append('<article class="article"><section class="featuredImage"><img src="' + result.content.media.images[0].url + '" alt="" /></section><section class="articleContent"><a href="' + result.content.url + '"><h3>' + result.content.title + '</h3></a><h6>' + result.content.tags[0].display + '</h6></section><section class="impressions">' + result.diggs.count + '</section><div class="clearfix"></div></article>')
        })
        $('#popUp').addClass('hidden');
    }
});
})

$('#digg').on('click' ,function loadDigg() {
    $('#popUp').removeClass('hidden');
$.ajax({
    type: 'GET',
    url: 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json',
    success: function(results) {
$("#main").empty();
        results.data.feed.forEach(function(result) {

            //HANDLBARS THIS
            $("#main").append('<article class="article"><section class="featuredImage"><img src="' + result.content.media.images[0].url + '" alt="" /></section><section class="articleContent"><a href="' + result.content.url + '"><h3>' + result.content.title + '</h3></a><h6>' + result.content.tags[0].display + '</h6></section><section class="impressions">' + result.diggs.count + '</section><div class="clearfix"></div></article>')
        })
        $('#popUp').addClass('hidden');
    }
});
})


$('#reddit').on('click' , function loadReddit() {
    //    var url = 'http://www.theverge.com/apple/rss/index.xml';
    //var url = 'https://www.reddit.com/r/news.json';
       $('#popUp').removeClass('hidden');
    $.ajax({
        type: "GET",
        //+ encodeURIComponent(url)
        url: 'https://accesscontrolalloworiginall.herokuapp.com/https://www.reddit.com/r/news.json',
        //dataType: 'json',
        error: function() {
            alert('Unable to load feed, Incorrect path or invalid feed');
        },
        success: function(results) {
            $("#main").empty();
            $('#popUp').addClass('hidden');
            //alert('It loads!');
            //values = xml.responseData.feed.entries;
            //console.log(values);
            results.data.children.forEach(function(result) {
                $("#main").append('<article class="article"><section class="featuredImage"><img src="' + redditLogo + '" /></section><section class="articleContent"><a href="' + result.data.url + '"><h3>' + result.data.title + '</h3></a><h6>tags</h6></section><section class="impressions">count</section><div class="clearfix"></div></article>');



            });
        }
    });
});


$('#googleNews').on('click', function loadGoogleNews() {
    //    var url = 'http://www.theverge.com/apple/rss/index.xml';
    //var url = 'https://www.reddit.com/r/news.json';
       $('#popUp').removeClass('hidden');
    $.ajax({
        type: "GET",
        //+ encodeURIComponent(url)
        url: 'https://accesscontrolalloworiginall.herokuapp.com/http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=http%3A%2F%2Fnews.google.com%2Fnews%3Foutput%3Drss',
        //dataType: 'json',
        error: function() {
            alert('Unable to load feed, Incorrect path or invalid feed');
        },
        success: function(results) {
            $("#main").empty();
$('#popUp').addClass('hidden');
            //alert('It loads!');
            //values = xml.responseData.feed.entries;
            //console.log(values);
            results.responseData.feed.entries.forEach(function(result) {
                $("#main").append('<article class="article"><section class="featuredImage"><img src="' + googleNews + '"/></section><section class="articleContent"><a href="' + result.link + '"><h3>' + result.title + '</h3></a><h6>' + result.categories + '</h6></section><section class="impressions">count</section><div class="clearfix"></div></article>');

            });
        }
    });
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



//3. When the user selects an article's title show the #popUp overlay. The content of the article must be inserted in the .container class inside #popUp.
// on click of title
// show #popUp
// insert data into popUp container

//4. Make sure you remove the .loader class when toggling the article information in the pop-up.


//5. Change the link of the "Read more from source" button to that of the respective article.

//6. When the user selects a source from the dropdown menu on the header,
//replace the content of the page with articles from the newly selected source.
//DONE
// $().on('click' function(){
//     hide current data source
//     load/display new data source
// });


//7. Display the loading pop up when the user first selects the new source, and hide it on success.
//DONE

//8. Add an error message (either alert or a notification on the page) if the app cannot load from the selected feed.
//DONE


//UI interactions
//9. When the user clicks/taps the search icon, expand the input box. Best approach for this is to toggle the .active class for the #search container. If the search input box is already expanded tapping the search icon again will close the input.
//DONE
$('#search_button').click(function() {
    $('#search').toggleClass('active');
});

//10. Pressing the "Enter" key should also close the opened input box. See Bonus 2 for search filtering functionality.
//press enter on text area..
//DONE
$(document).keypress(function(e) {
    if (e.which === 13) {
        $('#search').removeClass('active');
    }
});



//11. When the app is first loading and when the user selects to load a new feed from the dropdown, display the #popUp container with the .loader class. You can toggle the .hidden class from the container to display/hide the overlay container.
//DONE

// //trigger with keypress for test
// $(document).keypress(function(e) {
//     //needs to be on page load
//     if (e.which === 49) {
//         $('#popUp').toggleClass('hidden');
//         $('#popUp a').show();
//     }
// });


//12. Add functionality to hide the pop-up when user selects the "X" button on the pop-up.
//DONE
$('.closePopUp').click(function() {
    $('#popUp').addClass('hidden');
});


//13. Clicking/tapping the "Feedr" logo will display the main/default feed.
// on click load data source[0]
//DONE