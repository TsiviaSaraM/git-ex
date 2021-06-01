'use strict'

var mat = [
    [1,2,3,9,5],
    [6,1,8,9,10],
    [1, 9, 13, 14, 15]
];

console.log('mode = ', findMode(mat));
console.log('mode = ', findModeBonus(mat));


//print out the number that appears most frequently in the multi-dimensional array
function findMode(mat) {
    //create map
    var numsCountMap = {};
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat[0].length; j++) {
            var currNum = mat[i][j];
            numsCountMap[currNum] ? numsCountMap[currNum]++ : numsCountMap[currNum] = 1;
        }
    }
   // console.log(map);

    //get max from map
    var mode = Infinity;
    for (var num in numsCountMap) {
        if (numsCountMap[num] > numsCountMap[mode] || mode === Infinity) {
            mode = num;
        }
    }
    
    return mode;
}

//BONUS: If there are ties (e.g.: both 47 and 53 appeared 17 times), print both of them, or all of them. 
//(TIP: use an object map to count the numbers)
function findModeBonus(mat) {
    //create map
    var map = {};
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat[0].length; j++) {
            var currNum = mat[i][j];
            map[currNum] ? map[currNum]++ : map[currNum] = 1;
        }
    }
    //console.log('map', map);

    //get max from map
    var modes = [];
    for (var num in map) {

        //if this is the first num or the count is > mode
        if (modes.length === 0 || map[num] > map[modes[0]]) modes = [num];

        //if the count is the same as the mode
        else if (map[num] === map[modes[0]]) modes.push(num);

    }
    
    //console.log('modes', modes);
    return modes;

}