let count = 0;
let countNumbers = [0, 0, 0, 0, 0, 0];
let dieRollMap = new Map();
loop: while (true) {
    let dieRoll = Math.floor(Math.random() * 6) + 1;
    count++;
    dieRollMap.set(count, dieRoll);
    switch (dieRoll) {
        case 1: countNumbers[0]++;
            if (countNumbers[0] == 10) {
                break loop;
            }
            break;
        case 2: countNumbers[1]++;
            if (countNumbers[1] == 10) {
                break loop;
            }
            break;
        case 3: countNumbers[2]++;
            if (countNumbers[2] == 10) {
                break loop;
            }
            break;
        case 4: countNumbers[3]++;
            if (countNumbers[3] == 10) {
                break loop;
            }
            break;
        case 5: countNumbers[4]++;
            if (countNumbers[4] == 10) {
                break loop;
            }
            break;
        case 6: countNumbers[5]++;
            if (countNumbers[5] == 10) {
                break loop;
            }
            break;
        default: console.log('Invalid');
    }
}
console.log(dieRollMap);
console.log(countNumbers);
let max = countNumbers[0];
let min = countNumbers[0];
countNumbers.forEach(num => {
    if (num > max) max = num;
    if (num < min) min = num;
});
function returnMaxIndex(max) {
    for (i = 0; i < countNumbers.length; i++) {
        if (countNumbers[i] == max) {
            return i;
        }
    }
}
function returnMinIndex(min) {
    for (i = 0; i < countNumbers.length; i++) {
        if (countNumbers[i] == min) {
            return i;
        }
    }
}
function getNumber(index) {
    switch (index) {
        case 0: return 1;
        case 1: return 2;
        case 2: return 3;
        case 3: return 4;
        case 4: return 5;
        case 5: return 6;
        default: return 0;
    }
}
console.log('Maximum Number Got : ' + getNumber(returnMaxIndex(max)) + ' Minimum Number Got : ' + getNumber(returnMinIndex(min)));
