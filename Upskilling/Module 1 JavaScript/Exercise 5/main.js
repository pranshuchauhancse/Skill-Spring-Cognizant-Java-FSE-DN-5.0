// Event class
class Event {

    constructor(name, date, seats) {
        this.name = name;
        this.date = date;
        this.seats = seats;
    }

}

// Add method to prototype
Event.prototype.checkAvailability = function () {

    if (this.seats > 0) {
        return "Seats Available";
    } else {
        return "Event Full";
    }

};

// Create an event object
const event1 = new Event(
    "Community Workshop",
    "25 July 2026",
    30
);

// Display event details
function showEvent() {

    let output = "";

    // List object keys and values
    Object.entries(event1).forEach(function(item) {

        output += `<p><strong>${item[0]}</strong> : ${item[1]}</p>`;

    });

    output += `<p><strong>Status</strong> : ${event1.checkAvailability()}</p>`;

    document.getElementById("output").innerHTML = output;

}