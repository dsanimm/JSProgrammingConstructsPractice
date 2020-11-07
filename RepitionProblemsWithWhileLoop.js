// Powers of 2 acc to given condition
const myArgs = process.argv.slice(2);
let input = parseInt(myArgs[0]);
const limit = 256;
console.log('The powers of 2s upto ' + limit + ' are : ');
let term = 0;
let i = 0;
while (term < Math.pow(2, input) && term < 256) {
    term = Math.pow(2, i);
    i++;
    console.log(term);
}
//Find Magic number
const myArgs = process.argv.slice(2);
let input = parseInt(myArgs[0]);
if (input > 100 || input < 1) {
    console.log('Enter Valid No : ');
    return;
}
let lower = 0;
let upper = 100;
let mid = (lower + upper) / 2;
while (mid != input) {
    if (input > mid) {
        lower = mid;
        mid = (lower + upper) / 2;
    }
    if (input < mid) {
        upper = mid;
        mid = (lower + upper) / 2;
    }
}
if (mid == input) {
    console.log('The number given is ' + input + ' and generated is : ' + mid);
}
//Extend Coin flip for 11 tries

const limit = 11;
let win = 0;
let headCount = 0;
let tailCount = 0;
while (count < limit) {
    let num = Math.floor(Math.random() * 2);
    if (num == 0)
        console.log('Head');
    headCount++;
    if (num == 1)
        console.log('Tail');
    tailCount++;
    if (headCount == win) {
        console.log('Congratulations Head Win !');
    }
    if (tailCount == win) {
        console.log('Congratulations Tail Win !');
    }
}