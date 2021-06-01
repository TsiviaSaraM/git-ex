var currBalance = 1000;
var correctCode = '0796';
var userEnteredCode = prompt('please enter the severt pin code');

if (userEnteredCode === correctCode) {
    var withdrawl = prompt('how much would you like to withdraw');
    if (withdrawl <= currBalance) {
        currBalance -= withdrawl;
        alert('you withdrew money successfully, your new balance is ' + currBalance);
    } else {
        alert('you cannot withdraw more than your current balance');
    }   
} else {
    alert('sorry the code was incorrect');
}
