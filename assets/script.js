// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=&cl=78&p=1&t=ns&st=adv",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "8bbc585eecmshb8e825ff6561156p198f17jsn9d3a503b4c8d"
// 	}
// }

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

// function findTop() {

// }


var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew4000-!1900%2C2019-!4%2C10-!0%2C10-!0-!Movie-!English-!Any-!gt100-!%7Bdownloadable%7D&t=ns&cl=78&st=adv&ob=Rating&p=1&sa=and",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
		"x-rapidapi-key": "8bbc585eecmshb8e825ff6561156p198f17jsn9d3a503b4c8d"
	}
}

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });


$.ajax(settings).done(function (response) {
	for(i=0; i<10; i++) {
		console.log(response.ITEMS[i].title);
	}
 });
//console.log(response.ITEMS[0].title);
