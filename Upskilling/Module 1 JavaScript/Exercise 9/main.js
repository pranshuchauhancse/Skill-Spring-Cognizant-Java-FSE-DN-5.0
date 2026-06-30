const apiURL = "https://jsonplaceholder.typicode.com/posts?_limit=5";

// Using .then() and .catch()
function loadEvents() {

    document.getElementById("loading").style.display = "block";

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {

            displayEvents(data);

        })
        .catch(error => {

            document.getElementById("events").innerHTML =
                "Error loading events.";

            console.log(error);

        })
        .finally(() => {

            document.getElementById("loading").style.display = "none";

        });

}

// Using async/await
async function loadEventsAsync() {

    document.getElementById("loading").style.display = "block";

    try {

        const response = await fetch(apiURL);
        const data = await response.json();

        displayEvents(data);

    }
    catch (error) {

        document.getElementById("events").innerHTML =
            "Error loading events.";

        console.log(error);

    }
    finally {

        document.getElementById("loading").style.display = "none";

    }

}

// Display events
function displayEvents(events) {

    let output = "<h2>Event List</h2>";

    events.forEach(event => {

        output += `<p>${event.title}</p>`;

    });

    document.getElementById("events").innerHTML = output;

}