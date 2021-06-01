function isAbove18(name, age) {
    if (age < 18) {
        alert('you are too young ' + name);
        return false;
    }
    alert('You\'re allowed to buy beer ' + name);
    return true;
}

console.log('testing:\n17: ', isAbove18('Fred', 17), '\n18: ', isAbove18('Fred', 18), '\n19: ', isAbove18('Fred', 19));