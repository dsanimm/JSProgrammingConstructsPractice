//Powers of 2 less than input
const myArgs = process.argv.slice(2);
let input = parseInt(myArgs[0]);
console.log('The powers of 2s are : ');
for (i = 0; Math.pow(2, i) <= Math.pow(2, input); i++) {
    console.log(Math.pow(2, i));
}
//nth Harmoic Number
const myArgs = process.argv.slice(2);
let input = parseInt(myArgs[0]);
let harmonicSum = 0;
for (i = 1; i < input + 1; i++) {
    harmonicSum = harmonicSum + Math.pow(i, -1)
}
console.log('The nth harmonic number is : ' + harmonicSum);
//Find Prime
const myArgs = process.argv.slice(2);
let input = parseInt(myArgs[0]);
let result = false;
if (input == 1) {
    console.log(input + ' is neither prime nor composite');
}
for (i = 2; i <= Math.sqrt(input); i++) {
    if (input % i == 0) {
        console.log(input + ' is a Composite No :');
        result = true;
        break;
    }
}
if (result == false && input != 1) {
    console.log(input + ' is a Prime No :');
}
//Find Prime In Range Number
const myArgs = process.argv.slice(2);
let start = parseInt(myArgs[0]);
let end = parseInt(myArgs[1]);
if (start > end || start < 1 || end < 1) {
    console.log('Define Range Properly (Start,end) : ');
    return;
}
for (i = start; i <= end; i++) {
    let result = false;
    if (i == 1) {
        console.log(i + ' is neither prime nor composite');
    }
    for (j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            console.log(i + ' is a Composite No :');
            result = true;
            break;
        }
    }
    if (result == false && i != 1) {
        console.log(i + ' is a Prime No :');
    }
}
//Check Factorial
const myArgs = process.argv.slice(2);
let input = parseInt(myArgs[0]);
if (input < 1) {
    console.log('Enter Valid Number : ');
    return;
}
let mul = 1;
for (i = input; i >= 1; i--) {
    mul = mul * i;
}
console.log('Factorial of ' + input + ' is ' + mul);
//Prime Factors on n
const myArgs = process.argv.slice(2);
let input = parseInt(myArgs[0]);
if (input < 1) {
    console.log('Enter Valid Number !');
    return;
}
console.log('Factors of ' + input + ' are :');
for (i = 1; i <= Math.sqrt(input); i++) {
    if (input % i == 0) {
        console.log(i);
        if (i != input / i) {
            console.log(input / i);
        }
    }
}