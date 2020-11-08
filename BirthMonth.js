let count = 0;
const NUMBER_OF_PERSONS = 50;
let birthDetailsMap = new Map();
while (count < NUMBER_OF_PERSONS) {
    count++;
    let birthMonth = Math.floor(Math.random() * 12) + 1;
    let birthYear = Math.floor(Math.random() * 2) + 1992;
    let birthDate = birthMonth + '/' + birthYear;
    birthDetailsMap.set(count, birthDate);
}