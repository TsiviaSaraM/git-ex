'use strict'

makeWater();
/*
Making Water! Let's imagine that we have the following atoms: H B C N O F
a. Use an array with letters that stands for each atom.
b. Pick random atoms from the array to create molecules of 3 atoms.
c. Stop when you got ‘HOH’ for water. (Two Hydrogens and one Oxygen)
d. Print how many tries you had before ‘HOH’ was drawn.
*/

function makeWater() {
    var atoms = ['H', 'B', 'C', 'N', 'O', 'F'];
    var counter = 0;
    var molecule;

    

    while (molecule !== 'HOH') {
        molecule = createMolecule(atoms);
        console.log(molecule);
        counter++;
    }
    console.log(counter + 'tries were used');
}

function createMolecule(atoms) {
    var str = ''
    for (var i = 0; i < 3; i++) {
        var randomIndex = Math.floor(Math.random() * atoms.length);
        str += atoms[randomIndex];
    }
    return str;
}


// function makeWater() {
//     var atoms = ['H', 'B', 'C', 'N', 'O', 'F'];
//     var counter = 0;
//     var molecule;

//     while (molecule !== 'HOH') {
//         molecule = '';
//         for (var i = 0; i < 3; i++) {
//             var randomIndex = Math.floor(Math.random() * atoms.length);
//             molecule += atoms[randomIndex];
//         }

//         console.log(molecule);
//         counter++;
//     }
//     console.log(counter + 'tries were used');
// }