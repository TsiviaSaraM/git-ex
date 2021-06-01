var currentFloor = 0;
var floor = +prompt('Which floor would you like to go to?');

if(floor < -2 || floor > 4) {
    alert('this is not a valid floor');
} else {
    currentFloor = floor;
    alert('your current floor is ' + floor);  
    if (floor === 0) {
        alert ('Bye Bye');
    } else if (floor < 0) {
        alert('Drive Safely');
    }
}
