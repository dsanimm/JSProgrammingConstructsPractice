const prompt = require('prompt-sync')();
let num = prompt('Enter a Number To Get Its Prime Factors : ');
console.log('The number is : ' + num);
function primeFactors(n) {
    var factors = [],
        count = 2;
    while (n >= 2) {
        if (n % count == 0) {
            factors.push(count);
            n = n / count;
        }
        else {
            count++;
        }
    }
    return factors;
}
let primeFactorsArr = primeFactors(num);
console.log(primeFactorsArr);