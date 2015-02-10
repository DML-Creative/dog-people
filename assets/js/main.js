// dp - dog-people app namespace
// ------------------------------

dp = {
    init: function () {
        var self = dp;

        self.gmap.init();
    },
    gmap: { // dp.gmap - google map namespace
        mapSelector: "googleMap",
        infowindow: null,
        latlng: null,
        map: null,
        mapOpts: null,
        marker: null,

        init: function () {
            var self = dp.gmap;

            self.latlng = new google.maps.LatLng(47.606388, -122.330833);

            self.mapOpts = {
                center: self.latlng,
                zoom: 15
            };

            self.map = new google.maps.Map(document.getElementById(self.mapSelector), self.mapOpts);

            self.marker = new google.maps.Marker({
                position: self.latlng,
                map: self.map,
                title: 'Norm\'s Eatery & Alehouse'
            });

            self.infowindow = new google.maps.InfoWindow({
                content: $("#infoWindow").html()
            });

            google.maps.event.addListener(self.marker, "click", function () {
                self.infowindow.open(self.map, self.marker);
            });
        }
    }
};

$(function () {
    dp.init(); 
});

$(document).ready(function () {

    $('.ad-block').load('footer.html');

    // Toggle map and list
    $(".results-click").click(function () {
        $(".results, .results-click").toggle();
        return false;
    });

    // Search
    $(".search-wrapper input").click(function () {
        $(".inputs li:nth-of-type(2), .inputs li:last-of-type").hide();
        $(".inputs li.search-wrapper").css("width", "96%");
        $(".header-overlay, .header-exit, .geo-search").show();
        $('.results-search-wrapper').load('search.html');
        return false;
    });

    $(".header-exit").click(function () {
        $(".inputs li:nth-of-type(2), .inputs li:last-of-type").show();
        $(".inputs li.search-wrapper").css("width", "calc(100% - 100px)");
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
            menuTrigger.click(function () {
                if (menuMobile.css("display") == "none") {
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
});

