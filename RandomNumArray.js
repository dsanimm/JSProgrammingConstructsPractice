let numArray = [];
for (i = 1; i <= 10; i++)
    numArray.push(Math.floor(Math.random() * 900) + 100);

console.log(numArray);
let max = numArray[0];
let min = numArray[0];
numArray.forEach(num => {
    if (num > max) {
        max = num;
    }
    if (num < min) {
        min = num;
    }
});
console.log('Max : ' + max + ' Min : ' + min);
let Smax = numArray[0];
let Smin = numArray[0];
numArray.forEach(num => {
    if (!(num == max || num == min)) {
        if (num > Smax) {
            Smax = num;
        }
        if (num < Smin) {
            Smin = num;
        }
    }
});
console.log('Second Max : ' + Smax + ' Second Min : ' + Smin);
//Second Max and Second Min WIth Sorting
numArray.sort();
console.log(numArray);
console.log('Second Max : ' + numArray[numArray.length - 2] + ' Second Min : ' + numArray[1]);