const myArgs = process.argv.slice(2);
let input = parseInt(myArgs[0]);
if (input < 0) {
    console.log('Negetive Number Not Allowed ! ');
    return;
}
function isPrimeNumber(number) {
    if (number == 1) {
        return false;
    }
    for (i = 2; i <= Math.sqrt(input); i++) {
        if (input % i == 0) {
            return false;
        }
    }
    return true;
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
console.log('The Number ' + input + ' is Prime No : ' + isPrimeNumber(input));
console.log('The Number ' + input + ' is Palindrome No : ' + isPalindromeNumber(input));
console.log('The Reversed Number ' + reverseNo(input) + ' is Prime No : ' + isPrimeNumber(reverseNo(input)));
