// Display photos as we scroll the page
const options_scroll = [];
const numCards       = $(".card").length;

for (let i = 1; i < numCards; i++) {
    const selector = `#card${i}`;

    // Hide the card initially
    $(selector).css({"visibility": "hidden"});

    options_scroll.push({
        "selector": selector,
        "offset"  : Math.round($(selector).height() / 2),
        "callback": element => {
            $(element).css({"visibility": "visible"});
            Materialize.fadeInImage($(element));
        }
    });
}

Materialize.scrollFire(options_scroll);

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