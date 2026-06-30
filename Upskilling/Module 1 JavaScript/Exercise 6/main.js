// Event array
let events = [
    { name: "Baking", category: "Workshop" },
    { name: "Music Night", category: "Music" },
    { name: "Dance Show", category: "Music" }
];

// Add a new event using push()
events.push({
    name: "Art Exhibition",
    category: "Art"
});

function manageEvents() {

    // Filter only music events
    const musicEvents = events.filter(event => event.category === "Music");

    // Format event names using map()
    const formattedEvents = events.map(event =>
        `${event.category} on ${event.name}`
    );

    let output = "<h2>Music Events</h2>";

    musicEvents.forEach(event => {
        output += `<p>${event.name}</p>`;
    });

    output += "<h2>Formatted Event List</h2>";

    formattedEvents.forEach(event => {
        output += `<p>${event}</p>`;
    });

    document.getElementById("output").innerHTML = output;
}