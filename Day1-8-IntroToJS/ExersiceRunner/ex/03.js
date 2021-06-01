function toFarenheight(tempCelsius) {
    return tempCelsius * 9 / 5 + 32;
}

var tempCelsius = prompt('please enter the temperature in censius');
console.log(tempCelsius, ' °C is ', toFarenheight(tempCelsius), '°F');
