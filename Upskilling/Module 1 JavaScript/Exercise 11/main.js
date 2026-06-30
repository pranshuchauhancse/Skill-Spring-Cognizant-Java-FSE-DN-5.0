const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("eventError").textContent = "";
    document.getElementById("message").textContent = "";

    // Get form values using form.elements
    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const selectedEvent = form.elements["event"].value;

    let valid = true;

    if (name === "") {
        document.getElementById("nameError").textContent =
            "Please enter your name.";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailError").textContent =
            "Please enter your email.";
        valid = false;
    }

    if (selectedEvent === "") {
        document.getElementById("eventError").textContent =
            "Please select an event.";
        valid = false;
    }

    if (valid) {
        document.getElementById("message").textContent =
            "Registration Successful!";
    }

});