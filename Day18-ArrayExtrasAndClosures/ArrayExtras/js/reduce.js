'use strict'

var gEmps = [ 
    { name: 'Joe Schmoe', yearsExperience: 5, department: 'IT' }, 
    { name: 'Sally Sallerson', yearsExperience: 15, department: 'Engineering' }, 
    { name: 'Bill Billson', yearsExperience: 5, department: 'Engineering' }, 
    { name: 'Jane Janet', yearsExperience: 15, department: 'Management' }, 
    { name: 'Bob Hope', yearsExperience: 9, department: 'IT' } 
];

var expected;
var actual;
var input;
// expected = 49;
// actual = sumExperience();
// console.log('expected=', expected, ', actual=', actual);

// expected = {'IT':14, 'Engineering':20, 'Management':15};
// actual = getExperienceByDep();
// console.log('expected=', expected, ', actual=', actual);

// expected = {
//     5: [gEmps[0], gEmps[2]],
//     15: [gEmps[1], gEmps[3]],
//     9: [gEmps[4]]
// };
// actual = groupByExperience();
// console.log('expected=', expected, ', actual=', actual);

// expected = {'IT':2, 'Engineering':2, 'Management':1};
// actual = getDepartmentCount();
// console.log('expected=', expected, ', actual=', actual);

// input = [1, 2, 2, 3, 3, 2, 5, 5, 5];
// expected = '2, 5';
// console.log('expected=', expected, ', actual=', findModes(input));

// input = [1, 2, 2, 3, 3, 2, 5, 5, 5, 5, 2, 2];
// expected = '2';
// console.log('expected=', expected, ', actual=', findModes(input));

// input = [2, 2, 2];
// expected = '2';
// console.log('expected=', expected, ', actual=', findModes(input));
    
// input = ['Hello', [9, 6] ,18, [4, 7, 8]];
// expected = ['Hello', 9, 6 ,18, 4, 7, 8];
// actual = flatten(input);
// console.log('expected=', expected, ', actual=', actual);

// input = ['Hello', [9, 6, [1, 2, [3, 4]]] ,18, [4, 7, 8]];
// expected = ['Hello', 9, 6, 1, 2, 3, 4 ,18, 4, 7, 8];
// actual = flatten(input);
// console.log('expected=', expected, ', actual=', actual);

function sumExperience(){
    return gEmps.reduce(function(acc, emp){
        return acc + emp.yearsExperience;
    }, 0)
}

function getExperienceByDep() {
    return gEmps.reduce(function(acc, emp){
        if (acc[emp.department]) acc[emp.department] += emp.yearsExperience;
        else acc[emp.department] = emp.yearsExperience;
        return acc;
    }, {});
}

function groupByExperience() {
    return gEmps.reduce(function(acc, emp){
        if (acc[emp.yearsExperience]) acc[emp.yearsExperience].push(emp);
        else acc[emp.yearsExperience] = [emp];
        return acc;
    }, {});
}

function getDepartmentCount() {
    return gEmps.reduce(function(acc, emp){
        if (acc[emp.department]) acc[emp.department]++;
        else acc[emp.department] = 1;
        return acc;
    }, {});
}

function findModes(values) {

    var modes = [];
    var modeCount = 0;

   values.reduce(function(counts, value){
        if (counts[value]) counts[value]++;
        else counts[value] = 1;

        if (modes.length === 0 || counts[value] > modeCount) {
            modes = [value];
            modeCount = counts[value];
        }
        else if (counts[value] === modeCount) modes.push(value);

        return counts;
    }, {});

    console.log(modes);

    var modesStr = '';
    modes.forEach(function(num) {
        console.log(num); 
        modesStr += num;
    });

    return modesStr;
}


function flatten(values) {
    return values.reduce(function(flattened, value){

        Array.isArray(value) ? flattened = flattened.concat(flatten(value)) : flattened.push(value);
        // if(Array.isArray(value)) flattened = flattened.concat(flatten(value));
        // else flattened.push(value);

        return flattened;
    }, []);


}