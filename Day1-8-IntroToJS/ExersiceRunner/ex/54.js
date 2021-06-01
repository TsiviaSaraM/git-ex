'use strict'
/**********GLOBAL VARIABLES********/
var gPassengers = [];
var gPlanes = [];
var gFlights = [];


/********UNIT TESTING****************/
RunTravelAgent();
console.log('flights', gFlights);
console.log('passegers', gPassengers);
console.log('planes', gPlanes);

bookFlight(gFlights[1], gPassengers[3]);
bookFlight(gFlights[1], gPassengers[4]);

console.log('passegers', gPassengers);
console.log('planes', gPlanes);

console.log('frequent flyers:', getFrequentFlyers());

/********FUNCTIONS****************/
function createPlane(model, seatcount) {
    return {
        model: model,
        seatCount: seatcount
    }
}

function createPassanger(fullName, flights) {
    var id = Math.floor(Math.random() * (100000 - 10000) + 10000);
    return {
        id:id,
        fullName:fullName,
        flights:flights
    }
}

function createFlight(date = 0, departure, destination, plane, passengers) {
    return {
        date: date,
        departure: departure,
        destination: destination,
        plane: plane,
        passengers: passengers
    }
}


function RunTravelAgent() {
    //create passengers
    var names = ['apple', 'orange', 'pear', 'banana', 'mango'];
    for (var i = 0; i < 5; i++) {
        gPassengers.push(createPassanger(names[i], []));
    }
    
    //create planes
    var plane1 = createPlane('boeing1', 33);
    var plane2 = createPlane('boeing2', 20);
    gPlanes.push(plane1, plane2);
    
    //create flights
    var flight1 = createFlight(new Date(), 1200, 'London', gPlanes[1], []);
    var flight2 = createFlight(new Date(), 1403, 'Paris', gPlanes[0], []);
    gFlights.push(flight1, flight2);

}

//this function connects between the pointers of the passengers and their flights
function bookFlight(flight, passenger) {

    if (checkIfFlightFullyBooked(flight)) {
        flight.passengers.push(passenger);
        passenger.flights.push(flight);
    } else {
        console.log('cannot book any more seats on this flight');
    }
}

//returns the passengers with the maximal flights count
function getFrequentFlyers() {
    var frequentFlyers = [];

    for (var i = 0; i < gPassengers.length; i++) {
        var currPassenger = gPassengers[i];
        if (frequentFlyers.length === 0 || currPassenger.flights.length > frequentFlyers[0].flights.length) {
            frequentFlyers = [currPassenger];
        } else if (frequentFlyers[0].flights.length === currPassenger.flights.length) {
            frequentFlyers.push(currPassenger);
        }
    }

    return frequentFlyers;
}

//checks if there are available seats on the flights, and returns true if there are
function checkIfFlightFullyBooked(flight) {
    var maxPassengers = flight.plane.seatCount;
    return flight.passengers.length < maxPassengers;
}

