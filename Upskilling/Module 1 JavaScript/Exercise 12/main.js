const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };

    document.getElementById("message").textContent =
        "Submitting registration...";

    // Simulate delayed response
    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/posts", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(user)

        })

        .then(response => response.json())

        .then(data => {

            document.getElementById("message").textContent =
                "Registration submitted successfully!";

            console.log(data);

        })

        .catch(error => {

            document.getElementById("message").textContent =
                "Registration failed. Please try again.";

            console.log(error);

        });

    }, 2000);

});