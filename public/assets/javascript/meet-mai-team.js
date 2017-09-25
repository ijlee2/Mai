$(document).ready(function() {
    // Dropdown menu
    $(".dropdown-button").dropdown();

    // Navbar for mobile
    $(".button-collapse").sideNav();

    // Carousel settings
    $(".carousel").carousel({
        "duration": 120,
        "dist"    : -40,
        "shift"   : 80
    });
});