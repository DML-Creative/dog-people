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
	
})