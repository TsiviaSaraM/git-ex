'use strict'

var gMovies = [ 
    {imdb: 'tt0373889', name: 'Harry Potter'}, 
    {imdb: 'tt0000004', name: 'Un bon bock'}, 
    {imdb: 'tt0000003', name: 'Pauvre Pierrot'}, 
];

var input;
var expected;
var actual;

// var input = ['return', 'phrases', 'with one word']; 
// var expected = ['return', 'phrases'] ;
// var actual = onlyOneWord(input);
// console.log('input', input, 'expacted', expected, 'actual', onlyOneWord(input));

input = ['abc', 'xyz', 'a', 'abcd']; 
expected = ['cba', 'zyx', 'a', 'dcba'];
actual = reverseAll(input);
console.log('input', input, 'expacted', expected, 'actual', reverseAll(input));

// input = ['abcdefg', 'xyz']; 
// expected = ['Abcdefg', 'xyz'];
// actual = capitalizeLongerThan5(input);
// console.log('input', input, 'expacted', expected, 'actual', onlyOneWord(input));

// input = ['average', 'exceptional', 'amazing'];
// expected = ['aeae', 'eeioa', 'aai'];
// actual = onlyVowels(input);
// console.log('input', input, 'expacted', expected, 'actual', onlyOneWord(input));

// input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; expected = [[2, 4, 6], [8, 10, 12], [14, 16, 18]]; actual = doubleMatrix(input);
// console.log('input', input, 'expacted', expected, 'actual', onlyOneWord(input));
// console.table(actual);

/*TODO REWRITE THESE TESTS WITH ACTUAL AND EXPECTED AS VARS*/
// console.log(getMovieLink('tt0000003'));
// console.log(getMovieLink('tt0000006'));

// console.log(deleteMovie('tt0000003'));
// console.log(deleteMovie('tt0000003'));
// console.log(deleteMovie('tt0000006'));

// input = [
//     {name:'stu1', grade: 70},
//     {name:'stu2', grade: 71},
//     {name:'stu3', grade: 80},
//     {name:'stu4', grade: 99},
// ];
// expected = true;
// actual = allPassed(input);
// console.log('expected', expected, 'actual', actual );

// input = [
//     {name:'stu1', grade: 70},
//     {name:'stu2', grade: 71},
//     {name:'stu3', grade: 50},
//     {name:'stu4', grade: 99},
// ];
// expected = false;
// actual = allPassed(input);
// console.log('expected', expected, 'actual', actual );

// input = [
//     {name:'stu1', grade: 77}
// ];
// expected = true;
// actual = allPassed(input);
// console.log('expected', expected, 'actual', actual );

// input = [
//     {name:'stu1', grade: 69}
// ];
// expected = false;
// actual = allPassed(input);
// console.log('expected', expected, 'actual', actual );

// input = [
//     {name: 'player1', isAlive: false},
//     {name: 'player1', isAlive: true},
//     {name: 'player1', isAlive: false}
// ];
// expected = true;
// actual = isGameOn(input);
// console.log('input', input, 'expacted', expected, 'actual', actual);

// input = [
//     {name: 'player1', isAlive: false},
//     {name: 'player1', isAlive: false},
//     {name: 'player1', isAlive: false}
// ];
// expected = false;
// actual = isGameOn(input);
// console.log('input', input, 'expacted', expected, 'actual', actual);

// input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 
// expected = true;
// actual = isMatrix(input);
// console.log('input', input, 'expacted', expected, 'actual', actual);

// input = [[1, 2, 3], [4, 5, 6], [7, 8]]; 
// expected = false;
// actual = isMatrix(input);
// console.log('input', input, 'expacted', expected, 'actual', actual);

// input = [[1, 2, 3]]; 
// expected = true;
// actual = isMatrix(input);
// console.log('input', input, 'expacted', expected, 'actual', actual);

// input = [[1]]; 
// expected = true;
// actual = isMatrix(input);
// console.log('input', input, 'expacted', expected, 'actual', actual);

// input = [[1], []]; 
// expected = false;
// actual = isMatrix(input);
// console.log('input', input, 'expacted', expected, 'actual', actual);

// input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 
// expected = false;
// actual = isWide(input);
// console.log('input', input, 'expacted', expected, 'actual', actual);

// input = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 2, 3, 4, 5, 6]]; 
// expected = true;
// actual = isWide(input);
// console.log('input', input, 'expacted', expected, 'actual', actual);

// input = [[1, 2, 3, 4, 5, 6]]; 
// expected = true;
// actual = isWide(input);
// console.log('input', input, 'expacted', expected, 'actual', actual);

// input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 
// expected = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 
// actual = positiveRowsOnly(input);
// console.log('input', input, 'expacted', expected, 'actual', actual);

// input = [[1, 2, 3], [-4, 5, 6], [7, 8, 9]]; 
// expected = [[1, 2, 3], [7, 8, 9]]; 
// actual = positiveRowsOnly(input);
// console.log('input', input, 'expacted', expected, 'actual', actual);

// input = [[1, 2, -3], [-4, 5, 6], [-7, 8, 9]]; 
// expected = []; 
// actual = positiveRowsOnly(input);
console.log('input', input, 'expacted', expected, 'actual', actual);


function onlyOneWord(strs) {
    return strs.filter(function(str) {
        return str.indexOf(' ') === -1 || str.indexOf(' ') === str.length || str.substr (1).indexOf(' ') === -1;
    })
}

function reverseAll(strs) {
    return strs.map(function(str) {
        return str.split("").reverse().join("");
    });
}

function capitalizeLongerThan5(strs) {
    strs.forEach(function(str, index) {
        if (str.length > 5) strs[index] = str.charAt(0).toUpperCase() + str.substr(1);
    });

    return strs;
}

function onlyVowels(strs) {
    return str.split("").filter(function(char){
        var x = char.toUpperCase();
        return x == "A" || x == "E" || x == "I" || x == "O" || x == "U";
    });
}

function doubleMatrix(mat){
    return mat.map(function(row){
        return row.map(function(cell){
            return cell * 2;
        });
    });
}

function getMovieLink(imdb) {
    var movie = gMovies.find(function(movie) {
        return movie.imdb === imdb;
    });
    if (!movie) return 'movie not found';
    return `<a href="https://www.imdb.com/title/${movie.imdb}/">${movie.name}</a>`;
}

function deleteMovie(imdb) {
    var index = gMovies.findIndex(function(movie){
        return movie.imdb === imdb;
    });
    if (index === -1) return 'movie not found';
    return gMovies.splice(index, 1);
}

function allPassed(students){
    return students.every(function(student){
        return student.grade >= 70;
    });
}

function isGameOn(players) {
    return players.some(function(player){
        return player.isAlive;
    });
}

function isMatrix(arr2d){
    //if (!arr2d[0]) return 'this is a 1-d array';
    var len = arr2d[0].length;
    return arr2d.every(function(row){
        return row.length === len;
    });
}

function isWide(arr2d){
    //if (!arr2d[0]) return 'this is a 1-d array';
    return arr2d.some(function(row){
        return row.length > 5;
    });
}

function positiveRowsOnly (mat) {
    return mat.filter(function(row){
        return row.every(function(cell){
            return cell >= 0;
        })
    })
}

