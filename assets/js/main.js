$(document).ready(function() {
	
	$('.ad-block').load('footer.html');
	
	// Toggle map and list
	$(".results-click").click(function() {
		$(".results, .results-click").toggle();
		return false;
	});
	
	// Search
	$(".search-wrapper input").click(function() {
		$(".inputs li:nth-of-type(2), .inputs li:last-of-type").hide();
		$(".inputs li.search-wrapper").css("width","96%");
		$(".header-overlay, .header-exit, .geo-search").show();
		$('.results-search-wrapper').load('search.html');
		return false;
	});
	
	$(".header-exit").click(function() {
		$(".inputs li:nth-of-type(2), .inputs li:last-of-type").show();
		$(".inputs li.search-wrapper").css("width","calc(100% - 100px)");
		$(".header-overlay, .header-exit, .geo-search").hide();
		$('.results-search-wrapper').empty('search.html');
		return false;
	});
		
	// Small devices media query event handler for Mobile Menu
	var menuTrigger = $(".mobile-menu");
	var menuMobile = $("header nav ul");
	
	if (matchMedia) {
		var mq = window.matchMedia("(min-width: 1064px)");
		mq.addListener(WidthChange);
		WidthChange(mq);
	}
	
	// media query change
	function WidthChange(mq) {
	
		if (mq.matches) {
			// window width is at least 1064px
			menuMobile.show();
		} else {
			// window width is less than 1064px
			menuTrigger.click(function() {
				if(menuMobile.css("display") == "none") { 
					 menuMobile.show();
					 $(".nav-overlay").show();
				} else {
					 menuMobile.hide();
					 $(".nav-overlay").hide();
				}
				return false;
			});
		}
	}

})