function HomeIndex() {
/* Properties */
const heightFromTop = 300;
/* Methods */
this.initialiseScrollToTopButton = function () {
    /* Window Scroll Event Handlet */
    $(window).scroll(function () {
/* Show or Hide Scroll To Top Button based on scroll distance */
var verticalHeight = $(this).scrollTop();
if (verticalHeight > heightFromTop) {
    $("#scrollToTop").fadeIn();
} else {
    $("#scrollToTop").fadeOut();
}
    });
    /*scroll to Top Click Event Handler */
    $("#scrollToTop").click(function() {
        $("html, body").animate({ scrollTop: 0}, "slow");
    });
}
}
$(document).ready(function () {
/* Instantiate new Home class */
app.homeIndex = new HomeIndex();
/* Initialise the Scroll To Top Button */
app.homeIndex.initialiseScrollToTopButton();
});