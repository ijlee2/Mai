$(document).ready(function() {
    // Dropdown menu
    $(".dropdown-button").dropdown();

    // Navbar for mobile
    $(".button-collapse").sideNav();

    //onclick event to logout...achieved by resetting the expiration date to a day in the past.
    $(".logout").on('click', function() {
        document.cookie = "mai-fullname=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        document.cookie = "mai-id=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    });
    
});