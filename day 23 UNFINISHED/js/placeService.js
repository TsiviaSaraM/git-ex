'use strict'
const API_KEY = 'AIzaSyCuXfnc3e6EHlaEeZSoiXAYSxs6y7SKqIQ'
const PLACES_KEY = 'places';
var gPlaces;

//{id: 123, lat: 32.1416, lng: 34.831213, name: 'Pukis house'}
//todo use gMap instead of map
//TODO why define map in script url???
let infoWindow;

function getCurrLocation(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log('geolocation not supported');
  }
}


function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude +', ' + "Longitude: " + position.coords.longitude);
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: position.coords.latitude, lng: position.coords.longitude},
    zoom: 12,
  });
}

function removeLocation(id) {
  var index = gPlaces.findIndex(place => place.id === id);
  gPlaces.splice(index, 1);
}

function createPlaces(){
  gPlaces = loadFromStorage(PLACES_KEY);
  console.log('gPlaces at beginning...', gPlaces);
  
  if (!gPlaces || !gPlaces.length){
    gPlaces = [];
    gPlaces.push(_createPlace('Smithsonian National Museum of Natural History', 39, -77));
    gPlaces.push(_createPlace('The India Gate', 29, 77));
    gPlaces.push(_createPlace('The Scottish Seabird Centre', 56, -3));
    saveToStorage(PLACES_KEY, gPlaces);
  }
  console.log('gPlaces:', gPlaces);
  return gPlaces;
  // debugger;

}

function _createPlace(name, lat, lng){
  console.log('creating place...');
  return {
    id: getRandomId(),
    lat,
    lng,
    name,
  }
}

function addLocation(name, lat, lng){
    // debugger;
    var id = getRandomId();
    gPlaces.push(_createPlace(name, lat, lng));
      console.log(gPlaces);
      saveToStorage(PLACES_KEY, gPlaces);
  }
