$("#button_signup").click(event => {
    $.get("/");
});

$(document).ready(function() {
    // Navbar for mobile
    $(".button-collapse").sideNav();
});