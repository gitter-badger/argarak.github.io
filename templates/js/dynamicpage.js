var loadContent = function(href) {
    $("#main").addClass("animated fadeInLeft");
    $("#main").load(href + " #main", function(response, status, xhr) {
	window.scrollTo(0, 0);
	$("#main").fadeIn(200);
        //$("img").addClass("materialboxed");
	if (status == "error") {
	    var toastContent = $('<span>Page ' + href + ' not found.</span>');
	    Materialize.toast(toastContent, 5000);
	}
    });
}

$(function() {
    if (Modernizr.history) {
	$("a").click(function(e) {
	    e.preventDefault();
	    _href = $(this).attr("href");
	    history.pushState(null, null, _href);
	    loadContent(_href);
	});
    } else {
        // history is not supported; nothing fancy here
    }
});
