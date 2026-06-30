// Event list
let events = [
    { name: "Workshop", category: "Education" },
    { name: "Music Night", category: "Music" },
    { name: "Sports Day", category: "Sports" }
];

// Add a new event
function addEvent(name, category) {
    events.push({ name, category });
    alert(name + " added successfully!");
}

// Register a user
function registerUser(eventName) {
    alert("User registered for " + eventName);
}

// Filter events by category
function filterEventsByCategory(category, callback) {
    const filteredEvents = events.filter(event => event.category === category);
    callback(filteredEvents);
}

// Closure to track registrations
function registrationCounter() {
    let totalRegistrations = 0;

    return function () {
        totalRegistrations++;
        return totalRegistrations;
    };
}

const musicRegistration = registrationCounter();

// Display music events
function showMusicEvents() {

    filterEventsByCategory("Music", function (result) {

        let output = "<h3>Music Events</h3>";

        result.forEach(event => {
            output += `<p>${event.name}</p>`;
        });

        output += `<p>Total Music Registrations: ${musicRegistration()}</p>`;

        document.getElementById("output").innerHTML = output;

    });

}