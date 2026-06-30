$(document).ready(function () {

    // Register button click
    $("#registerBtn").click(function () {
        alert("Registration Successful!");
    });

    // Hide event card
    $("#hideBtn").click(function () {
        $(".event-card").fadeOut();
    });

    // Show event card
    $("#showBtn").click(function () {
        $(".event-card").fadeIn();
    });

});