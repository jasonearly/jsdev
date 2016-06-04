'use strict';
/*
  Please add all Javascript code to this file.
  */

var redditLogo = "https://camo.githubusercontent.com/b13830f5a9baecd3d83ef5cae4d5107d25cdbfbe/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f3732313033382f313732383830352f35336532613364382d363262352d313165332d383964312d3934376632373062646430332e706e67";
var googleNews = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png";

//initial load
$(window).on('load', function() {
    $('#popUp a').hide();
    $('#popUp').removeClass('hidden');
});

//esc key closes popUp
$(document).keyup(function(e) {
    //needs to be on page load
    if (e.which === 27) {
        $('#popUp').addClass('hidden loader');
        $('#popUp a').hide();
         $('#popUp p').show();
    }
});


//Search bar
$('#search_button').click(function() {
    $('#search').toggleClass('active');
});
$(document).keypress(function(e) {
    if (e.which === 13) {
        $('#search').removeClass('active');
    }
});

//Display this on page load
$(function initialDigg() {
    $.ajax({
        type: 'GET',
        url: 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json',
        error: function() {
            alert('Unable to load feed, Incorrect path or invalid feed');
        },
        success: function(results) {
            results.data.feed.forEach(function(result) {

                //HANDLBARS THIS
                $("#main").append('<article class="article"><section class="featuredImage"><img src="' + result.content.media.images[0].url + '" alt="" /></section><section class="articleContent"><a href="' + result.content.url + '"><h3>' + result.content.title + '</h3></a><h6>' + result.content.tags[0].display + '</h6></section><section class="impressions">' + result.diggs.count + '</section><div class="clearfix"></div></article>')


                $('.articleContent a').on('click', function(event) {
                    event.preventDefault();
                    $('#popUp a').show();
                    $('#popUp').removeClass('loader hidden');

                    $('#popUp .container h1').text(result.content.title);
                    $('#popUp p').text(result.content.description);
                    $('#source').attr('href', result.content.url);

                });


                $('.closePopUp').click(function() {
                    $('#popUp').addClass('hidden loader');
                    $('#popUp a').hide();
                });


            });


            $('#popUp').addClass('hidden');
        }
    });
});

//load digg feed
$('.digg').on('click', function loadDigg() {
    $('#popUp').removeClass('hidden');
    $.ajax({
        type: 'GET',
        url: 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json',
        error: function() {
            alert('Unable to load feed, Incorrect path or invalid feed');
        },
        success: function(results) {
            $("#main").empty();
            $('#popUp').addClass('hidden');
            results.data.feed.forEach(function(result) {

                //HANDLBARS THIS
                $("#main").append('<article class="article"><section class="featuredImage"><img src="' + result.content.media.images[0].url + '" alt="" /></section><section class="articleContent"><a href="' + result.content.url + '"><h3>' + result.content.title + '</h3></a><h6>' + result.content.tags[0].display + '</h6></section><section class="impressions">' + result.diggs.count + '</section><div class="clearfix"></div></article>')

                $('.articleContent a').on('click', function(event) {
                    event.preventDefault();
                    $('#popUp a').show();
                    $('#popUp').removeClass('loader hidden');

                    $('#popUp .container h1').text(result.content.title);
                    $('#popUp p').text(result.content.description);
                    $('#source').attr('href', result.content.url);

                });

                $('.closePopUp').click(function() {
                    $('#popUp').addClass('hidden loader');
                    $('#popUp a').hide();
                });
            });
        }
    });
});


//load reddit source
$('#reddit').on('click', function loadReddit() {
    $('#popUp').removeClass('hidden');
    $.ajax({
        type: "GET",
        url: 'https://accesscontrolalloworiginall.herokuapp.com/https://www.reddit.com/r/news.json',
        error: function() {
            alert('Unable to load feed, Incorrect path or invalid feed');
        },
        success: function(results) {
            $("#main").empty();
            $('#popUp').addClass('hidden');

            results.data.children.forEach(function(result) {
                $("#main").append('<article class="article"><section class="featuredImage"><img src="' + redditLogo + '" /></section><section class="articleContent"><a href="' + result.data.url + '"><h3>' + result.data.title + '</h3></a><h6>tags</h6></section><section class="impressions">count</section><div class="clearfix"></div></article>');

                $('.articleContent a').on('click', function(event) {
                    event.preventDefault();
                    $('#popUp a').show();
                    $('#popUp').removeClass('loader hidden');

                    $('#popUp .container h1').text(result.data.title);
                    $('#popUp p').hide();
                    $('#source').attr('href', result.data.url);

                });


                $('.closePopUp').click(function() {
                    $('#popUp').addClass('hidden loader');
                    $('#popUp a').hide();
                    $('#popUp p').show();
                });
            });
        }
    });
});

//load google news feed
$('#googleNews').on('click', function loadGoogleNews() {
    $('#popUp').removeClass('hidden');
    $.ajax({
        type: "GET",
        url: 'https://accesscontrolalloworiginall.herokuapp.com/http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=http%3A%2F%2Fnews.google.com%2Fnews%3Foutput%3Drss',
        error: function() {
            alert('Unable to load feed, Incorrect path or invalid feed');
        },
        success: function(results) {
            $("#main").empty();
            $('#popUp').addClass('hidden');

            results.responseData.feed.entries.forEach(function(result) {
                $("#main").append('<article class="article"><section class="featuredImage"><img src="' + googleNews + '"/></section><section class="articleContent"><a href="' + result.link + '"><h3>' + result.title + '</h3></a><h6>' + result.categories + '</h6></section><section class="impressions">count</section><div class="clearfix"></div></article>');

                $('.articleContent a').on('click', function(event) {
                    event.preventDefault();
                    $('#popUp a').show();
                    $('#popUp').removeClass('loader hidden');

                    $('#popUp .container h1').text(result.title);
                    $('#popUp p').text(result.contentSnippet);
                    $('#source').attr('href', result.link);

                });

                $('.closePopUp').click(function() {
                    $('#popUp').addClass('hidden loader');
                    $('#popUp a').hide();
                });

            });


        }
    });
});



//STILL NEEDS TO LOOP THROUGH TO GET RIGHT DATA


//The app must be able to display the full contents of the article. This can be as simple as an iframe or as fancy as you need it to be.
//Get news source title to display in the selector


