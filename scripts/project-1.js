

$(document).ready(function () {


//on navigation between upper links 
    $('.mainNavLink').click(function (e) {
        e.preventDefault();
        $('.main-navigationContainer .main-navigation li').removeClass('active');
        $(this).parent().addClass("active");
        var id = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(id).offset().top
        }, 800);
    });





    //on navigation between works
    $('.worksControl').on("click", function (e) {
        var x = $(this);
        e.preventDefault();
        if (x.hasClass("controlActive")) {
            return false;
        }
        $('.worksControl').removeClass('controlActive');
        $(this).addClass("controlActive");

        idName = $(this).attr("href");
        $(".worksItems").fadeOut();
        $(".worksTabs").find('#' + idName).fadeIn();

    });




    //slick slider on features
    $('.featuresContent').slick({
        dots: true,
        infinite: true,
        rtl: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        arrows: false,
        draggable: false,
        autoplaySpeed: 5000,
        responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
        ]
    });




    //my team slider

    $('.myTeamContent').slick({
        dots: true,
        infinite: true,
        rtl: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        arrows: false,
        draggable: false,
        autoplaySpeed: 5000,
        responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
        ]
    });




    //hover on my team images
    $(".memberImg").hover(function () {
        $(this).children('.memberOnHover').fadeIn();
        $(this).siblings('.memberName').css("color", "#1EA78D");
    }, function () {

        $(this).children('.memberOnHover').fadeOut();
        $(this).siblings('.memberName').css("color", "#062033");
    });




    google.maps.event.addDomListener(window, 'load', initialize);

});



//to adjust nav on scroll
$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        $('.main-navigationContainer').addClass("removeTransparency");
    }
    else {
        $('.main-navigationContainer').removeClass("removeTransparency");
    }
}
);


//google map
function initialize() {


    var myLatlng = new google.maps.LatLng(31.1980450, 29.9191707);
    var mapOptions = {
        zoom: 18,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);


    var iconBase = '../assets/images/';
    // To add the marker to the map, use the 'map' property
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Hello World!",
        icon: iconBase + 'map-cursor.png'
    });

}