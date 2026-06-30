const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    console.log("Form submission started...");

    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };

    // Log payload
    console.log("Request Payload:", user);

    fetch("https://jsonplaceholder.typicode.com/posts", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(user)

    })

    .then(response => response.json())

    .then(data => {

        console.log("Server Response:", data);

        document.getElementById("message").textContent =
            "Registration Successful!";

    })

    .catch(error => {

        console.log("Error:", error);

        document.getElementById("message").textContent =
            "Registration Failed.";

    });

});