'use strict'

/*****GLOBAL VARIABLES *********/
var gIdCount = 0;
var gmonsters = createMonsters();

/**********UNIT TESTING************/
console.log('monsters: ', gmonsters);

//test getbyid
console.log('printing all monsters in order of id:');
for (var id = 0; id < 4; id++) {
    console.log(getMonsterById(id));
}

//teset getmostpowerful
gmonsters.push(createMonster('Fred', 27));
console.log('the most powerful monster is ', findMostPowerful(gmonsters));

//test breedmonsters
console.log('the baby of monster 1 and 2 monster is', breedMonsters(1, 4));
console.log('the baby of monster 1 and 2 monster is', breedMonsters(4, 1));

/*********************functions*******************/

/*creates an array of monsters with 4 monsters
*/
function createMonsters() {
    var monsters = [];

    for (var i = 0; i < 4; i++) {
        monsters.push(createMonster());
    }
    return monsters;
}

/*
returns a new monster object. The name and power parameters are optional. 
Each monster should have
i. id – a unique sequential number
ii. name – that you will read from the user
iii. power (random 1-100)
*/
function createMonster(name='Anon' , power=0) {

    var monster = {
        id : gIdCount++,
        name : name,
        power : power 
    }
    return monster;
}

/*
finds and returns a monster object by its id.
*/
function getMonsterById(id) {
    for (var i = 0; i < gmonsters.length; i++) {
        if (gmonsters[i].id === id) return gmonsters[i];
    }
} 

/*the function removes the specified monster from the array*/
function deleteMonster(id) {
    var monster = getMonsterById(id);

    for (var i = 0; i < monsters.length; i++) {
        if (monsters[i] = monster) {
            monsters.splice(indexOf(monster), 1);
            return monster;
        }
    }
}

/*the function updates the specified monster, setting a new power.*/
function updateMonster(id, newPower) {
    var monster = getMonsterById(id);
    monster['power'] = newPower;
}

/*returns the monster with the highest power*/
function findMostPowerful(monsters) {
    var mostPowerful = null;
    for (var i = 0; i < monsters.length; i++) {
        var currMonster = monsters[i];
        if (!mostPowerful || currMonster.power > mostPowerful.power) {
            mostPowerful = currMonster;
        }
    }

    return mostPowerful;
}

/*the function returns a new monster. The breeded monster power is an average of its parents power. 
The name is the beginning half of the first parent name, and the second half is the end of the 
second parent name.
*/
function breedMonsters(monsterId1, monsterId2) {
    var monster1 = getMonsterById(monsterId1);
    var monster2 = getMonsterById(monsterId2);

    var newName = monster1.name.substring(0, monster1.name.length/2) + monster2.name.substring(monster2.name.length / 2);
    var newPower = (monster1.power + monster2.power) / 2;

    return createMonster(newName, newPower);
}