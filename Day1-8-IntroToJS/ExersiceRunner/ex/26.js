function generateRamdon() {
    var min = 0;
    var max = 1000;
    var counter = 0; 
    var nextRandom;

    while (counter < 10) {
        nextRandom = Math.floor(Math.random() * (max - min) + min);
        console.log(nextRandom);
        counter++;
        min = nextRandom + 1;
        min = nextRandom + 1001;
    }
}

generateRamdon();