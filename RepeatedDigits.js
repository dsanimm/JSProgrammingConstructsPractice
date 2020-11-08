let numArr = new Array();
for (i = 0; i <= 100; i++) {
    let tenths = Math.floor(i / 10);
    let Units = i % 10;
    if (tenths == Units) {
        numArr.push(i);
    }
}
console.log(numArr);