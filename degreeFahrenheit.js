const myArgs = process.argv.slice(2);
let temp = parseInt(myArgs[0]);
let choice = parseInt(myArgs[1]);
if (choice == 1) {
    if (temp < 0 || temp > 100) {
        console.log('Limit of Freezing And Boiling Point Should Be Maintained !');
        return;
    }
}
if (choice == 2) {
    if (temp < 32 || temp > 212) {
        console.log('Limit of Freezing And Boiling Point Should Be Maintained !');
        return;
    }
}
function celciusToFarenheit(celcius) {
    return ((celcius * (9 / 5)) + 32);
}

function farenheitToCelcius(farenheit) {
    return ((farenheit - 32) * (5 / 9));
}

switch (choice) {
    case 1: console.log(temp + ' degree celcius is converted to farenheit : ' + celciusToFarenheit(temp) + ' farenheit');
        break;
    case 2: console.log(temp + ' degree farenheit is converted to celcius : ' + farenheitToCelcius(temp) + ' celcius');
        break;
    default: console.log('Choose Proper Converter : (1 or 2) : ');
}