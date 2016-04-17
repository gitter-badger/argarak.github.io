var fork = "<svg class=\"fork secondary-content\" aria-hidden=\"true\" class=\"octicon octicon-repo-forked\" height=\"16\" version=\"1.1\" viewBox=\"0 0 10 16\" width=\"10\"><path d=\"M8 1c-1.11 0-2 0.89-2 2 0 0.73 0.41 1.38 1 1.72v1.28L5 8 3 6v-1.28c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72v1.78l3 3v1.78c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V9.5l3-3V4.72c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2zM2 4.2c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3 10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3-10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z\" fill=\"#FFF\"></path></svg>"

var card = ["<div class=\"grid-item card grey darken-4\"><div class=\"card-content white-text\"><span class=\"card-title\">", "</span><p>", "</p></div><div class=\"card-action\">", "</div>"]

$.getJSON("https://api.github.com/users/argarak/repos", function(data) {
    for(var i = 0; i < data.length; i++) {
	if(data[i]["fork"]) {
	    $("#repositories").append(
		card[0] + "<a href=\"" + data[i]["html_url"] + "\" class=\"repo\">" +
		data[i]["name"] + "</a>" + card[1] + data[i].description + card[2] +
		fork + card[3]
	    );
	} else {
	    $("#repositories").append(
		card[0] + "<a href=\"" + data[i]["html_url"] + "\" class=\"repo\">" +
		data[i]["name"] + "</a>" + card[1] + data[i].description + card[2] +
		card[3]
	    );
	}    
    }
    $('.grid').masonry({
	gutter: 20,
	itemSelector: '.grid-item',
	fitWidth: true
    });
});

