var numFriends = prompt('How many friends do you have on FB?');

if (numFriends > 500) {
    console.log('OMG, a celebrity');
} else if (numFriends > 300) {
    console.log('You are well connexted');
} else if (numFriends > 100) {
    console.log('You know some people...');
} else if (numFriends > 0) {
    console.log('Quite pickey aren\'t you?');
} else if (numFriends === 0) {
    console.log('Let\'s be friends!');
}