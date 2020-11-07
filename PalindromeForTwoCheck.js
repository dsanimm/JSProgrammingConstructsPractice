
const myArgs = process.argv.slice(2);
let input1 = parseInt(myArgs[0]);
let input2 = parseInt(myArgs[1]);
if (input1 < 0 || input2 < 0) {
    console.log('Enter Valid No ! ');
    return;
}
function reverseNo(number) {
    let rem = 0;
    while (number != 0) {
        rem = rem * 10 + number % 10;
        number = Math.floor(number / 10);
    }
    return rem;
}
function isPalindromeNumber(number) {
    let reverse = reverseNo(number);
    if (reverse == number) {
        return true;
    }
    return false;
}
console.log('The number ' + input1 + ' is Palindrome Number : ' + isPalindromeNumber(input1));
console.log('The number ' + input2 + ' is Palindrome Number : ' + isPalindromeNumber(input2));