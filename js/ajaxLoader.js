// Copyright 2016 Jakub KukieÅka

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


//////////////////////////////////////////////
// The ajax loader will be implemented soon //
// but now it is a little bit broken	    //
//////////////////////////////////////////////

$(function() {
    $('a').click(function(e) {
	var link = $(this).attr('href');
	var title = $(this).attr('title');
	
	$(".progress").show();

	$("#main").append($("<div>").css({
            position: "fixed",
            width: "100%",
            height: "100%",
            "background-color": "#000",
            opacity: 0.6,
            "z-index": 900,
            top: 64,
            left: 90,
	}).attr("id","page-cover"));
	
	// $.ajax({
	//     url: link,
	//     dataType: 'text',
	//     success: function(data) {
	// 	$('#main').empty();
	// 	$('#main').html($(data).find('#main').children());
	// 	$("#title").text(title);
	// 	$('code').each(function(i, block) {
	// 	    hljs.highlightBlock(block);
	// 	});
	// 	$("#main").children().ready(function() {
	// 	    $(".progress").hide();
	// 	    $("#page-cover").remove();
	// 	});
	//     },
	//     error: function() {
	// 	$("#page-cover").remove();
	// 	$(".progress").hide();		
	// 	var toastContent = $('<span>Page ' + link + ' not found.</span>');
	// 	Materialize.toast(toastContent, 5000);
	// 	hljs.initHighlightingOnLoad();
	//     }
	// });

        e.preventDefault(); //so the browser doesn't follow the link

        $("#main").load(link + " #main", function(response, status, xhr) {
	    window.scrollTo(0, 0);
	    $(".progress").hide();
            $("img").addClass("materialboxed");
	    if (status == "error") {
		$("#page-cover").remove();
		$(".progress").hide();		
		var toastContent = $('<span>Page ' + link + ' not found.</span>');
		Materialize.toast(toastContent, 5000);
		hljs.initHighlightingOnLoad();
	    }
        });
    });
});
