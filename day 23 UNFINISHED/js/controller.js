'use strict'

var map;

function onInit() {
    createPlaces();
    renderLocations();    
}

function initMap() {
    //TODO cn write gMap.addListener((event)=>{...})
    
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 29.5577, lng: 34.9519 },
        zoom: 12,
    });
    // map.addListener((event)=>{onAddLocation})
    google.maps.event.addListener(map, 'click',onAddLocation);
}

function renderLocations() {
    console.log('gPlaces', gPlaces);
    var strHTML = gPlaces.map(place => {
        debugger;
        var latlng = new google.maps.LatLng(place.lat, place.lng);
        console.log('laglng', latlng);
        new google.maps.Marker({
            position: latlng,
            map,
            title:'mymarker',
            icon: '../img/icon.png'
        });
        // var marker = new google.maps.Marker();
        // marker;
        // marker.setPosition({lat: place.lat, lng: place.lng});
        // marker.setAnimation(google.maps.Animation.BOUNCE);
        // marker.setIcon('../img/location.png');
        return `
        <tr>
            <td>${place.id}</td>
            <td>${place.name}</td>
            <td>${place.lat}</td>
            <td>${place.lng}</td>
            <td><button onclick="onRemoveLocation(${place.id})">Delete</button></td>
        </tr>`
    });
    document.querySelector('.locations').innerHTML = strHTML.join('');
}

//add place entered to local storage
function onAddLocation(ev){

    alert("Latitude: " + ev.latLng.lat() + " " + ", longitude: " + ev.latLng.lng());

    var name = prompt('name?');
    var lat = ev.latLng.lat();
    var long = ev.latLng.lng();

    console.log(name, lat, long);
    addLocation(name, lat, long);
    renderLocations();

}


function onRemoveLocation(id) {
    removeLocation(id);
   
    renderLocations();
}



//TODO why does clicking on map not activate onAddLocation after this function is called
function onGetCurrLocation(){
    getCurrLocation();
    // google.maps.event.addListener(map, 'click',onAddLocation);

}


