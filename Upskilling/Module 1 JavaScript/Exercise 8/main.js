// Event list
const events = [
    { name: "Sports Day", category: "Sports" },
    { name: "Music Night", category: "Music" },
    { name: "Baking Workshop", category: "Workshop" }
];

// Display events
function displayEvents(list) {

    const container = document.getElementById("events");
    container.innerHTML = "";

    list.forEach(event => {

        const card = document.createElement("div");
        card.className = "event-card";

        card.innerHTML = `
            <h3>${event.name}</h3>
            <p>Category: ${event.category}</p>
            <button onclick="register('${event.name}')">
                Register
            </button>
        `;

        container.appendChild(card);

    });

}

// Register button
function register(eventName) {
    alert("You have registered for " + eventName);
}

// Filter by category
function filterEvents() {

    const category = document.getElementById("category").value;

    if (category === "All") {
        displayEvents(events);
    } else {

        const filtered = events.filter(event =>
            event.category === category
        );

        displayEvents(filtered);
    }

}

// Search using keyboard
function searchEvent() {

    const keyword = document
        .getElementById("search")
        .value
        .toLowerCase();

    const filtered = events.filter(event =>
        event.name.toLowerCase().includes(keyword)
    );

    displayEvents(filtered);

}

// Show all events when page loads
displayEvents(events);