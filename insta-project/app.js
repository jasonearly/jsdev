// $(function() {
// 	if (window.location.href.indexOf('access_token') >= 0) {
// 		$('.sign-in-view').hide()

// 		fetchImages()
// 	} else {
// 		$('.image-results-view').hide()
// 	}
// })

// function fetchImages() {
// 	if (navigator.geolocation) {
// 		navigator.geolocation.getCurrentPosition(function(position) {
// 			callInstagramApi(41.836944, -87.684722, function(response) {
// 				putImagesOnPage(response.data)
// 			})
// 		})
// 	}
// }

// function callInstagramApi(latitude, longitude, callback) {
// 	var accessToken = window.location.hash.match(/access_token=([a-f0-9.]+)/)[1];

// 	$.ajax({
// 		url: 'https://api.instagram.com/v1/media/search?lat=' + latitude + '&lng=' + longitude + '&distance=5000&access_token=' + accessToken,
// 		method: 'GET',
// 		dataType: 'jsonp',
// 		success: callback
// 	})
// }

// function putImagesOnPage(allData) {
// 	allData.forEach(function(data) {
// 		var imageUrl = 'url(' + data.images.standard_resolution.url + ')'

// 		$('<div></div>').appendTo('.images').css('background-image', imageUrl).addClass('image');
// 	})
// }

var accessToken = (window.location.hash.match(/access_token=([a-f0-9.]+)/) || {})[1];

// if (accessToken) {
//     // The token exists; the user is signed in
// } else {
//     // The token doesn't exist, you still need to sign in
// }

$(function() {
	if (window.location.href.indexOf('access_token') >= 0) {
		$('.sign-in-view').hide()
	} else {
		$('.image-results-view').hide()
	}
})


// This tests to see if the Geolocation is available
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude
        var longitude = position.coords.longitude

        console.log(latitude, longitude)

    $.ajax({
    url: 'https://api.instagram.com/v1/media/search?lat=' + latitude + '&lng=' + longitude + '&distance=5000&access_token=' + accessToken,
    method: 'GET',
    dataType: 'jsonp',
    sucess: function(response){
						response.data.forEach(function(data){
 						var imageUrl = 'url(' + data.images.standard_resolution.url + ')'
    		$('<div></div>').appendTo('.images').css('background-image', imageUrl).addClass('image');
    	})
    }
				});
			});
}


