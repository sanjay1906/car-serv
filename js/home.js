$(".owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    margin: 30,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});


var owl = $(".sliderWapper");
owl.owlCarousel();
// Go to the next item
$(".nxtBtn").click(function () {
    owl.trigger("next.owl.carousel");
});
// Go to the previous item
$(".prvBtn").click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger("prev.owl.carousel", [300]);
});