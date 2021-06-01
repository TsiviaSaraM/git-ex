'use strict'

var votes = ['Harry', 'Sarah', 'Fred', 'Fred', 'George', 'Fred', 'Harry', 'Fred', 'George', 'Fred', 'George', 'George', 'Sarah', 'Sarah', 'Fred', 'Harry', 'Sarah', 'Harry', 'Fred', 'Fred'];
console.log('votes: ' + votes);
console.log(countVotes(votes, 'Harry') + ' votes for Harry');
console.log(countVotes(votes, 'Sarah') + ' votes for Sarah');
console.log(countVotes(votes, 'Fred') + ' votes for Fred');
console.log(countVotes(votes, 'George') + ' votes for George');


/*
39. Write a function named countVotes(votes, candidateName) that counts how many votes this candidate got.
 i.e.: if the votes array looks like this: ['Nuli', 'Pingi', 'Uza', 'Shabi', ‘Uza’] And the candidateName is :
  'Uza', the function returns 2.
*/

function countVotes(votes, candidateName) {

    var count = 0;
    for (var i = 0; i < votes.length; i++) {
        if (votes[i] === candidateName) count++;
    }

    return count;
}