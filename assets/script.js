var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get!Any%3AUS&p=1&t=ns&st=adv",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
		"x-rapidapi-key": "8bbc585eecmshb8e825ff6561156p198f17jsn9d3a503b4c8d"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});
