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


//////////////////////////
// Not yet implemented! //
//////////////////////////

$("input").click(function() {
    $.ajax({
	    url: "/archive.html",
	    dataType: 'text',
	    success: function(data) {
		$('#main').empty();
		$('#main').html($(data).find('.posts').children());
		$("#title").text("Search");
		$('code').each(function(i, block) {
		    hljs.highlightBlock(block);
		});
		$("#main").children().ready(function() {
		    $(".progress").hide();
		    $("#page-cover").remove();
		});
	    },
	    error: function() {
		$("#page-cover").remove();
		$(".progress").hide();		
		var toastContent = $('<span>Page ' + link + ' not found.</span>');
		Materialize.toast(toastContent, 5000);
		hljs.initHighlightingOnLoad();
	    }
	});
});
$("input").keyup(function() {
    var searchTerm = $("input").val();
    regx = new RegExp(searchTerm, "gi");
    $('*[id*=post-link]:visible').each(function() {
	if(this.text().search(regx) === -1)
	    $(this).hide();
	else
	    $(this).show();
    });
});  
