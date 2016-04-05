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

$(document).ready(function() {
    if(Cookies.get("closeLicenseBottom") === "true") {
	$('license').hide();
    }
    
    $('.button-collapse').sideNav({
	menuWidth: 90,     
	edge: 'left',      
	closeOnClick: false 
    });
    
    $("ul").addClass("collection");
    $("li").addClass("collection-item");

    $("#nav-mobile").removeClass("collection");
    
    $('.license-close').click(function() {
	$('license').hide();
	Cookies.set("closeLicenseBottom", "true");
    });

    // some element to monitor
    var nav = $("#nav-mobile");
    
    // hook up the watcher
    nav.watch({
	// specify CSS styles or attribute names to monitor
	properties: "left",

	// callback function when a change is detected
	callback: function(data, i) {
	    if(data.vals[0] === "-100px") {
		nav.css("display", "none");
	    } else {
		nav.css("display", "inline");
	    }
	}
    });

	// Search is broken currently, no point in even showing the bar
    //$("#search").slideUp();
    
    //$('#search-icon').click(function() {
	//var search = $('#search');
	
	//search.is(":visible") ? search.slideUp() : search.slideDown(function() {
	//    search.find('input').focus();
	//});
    //});
});

