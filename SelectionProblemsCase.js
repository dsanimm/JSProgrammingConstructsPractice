//Read Number Write in Words
let number=Math.floor(Math.random()*10);
console.log('The number is : '+number);
switch (number){
    case 0 : console.log('Zero');
    break;
    case 1 :  console.log('One');
    break;
    case 2 : console.log('Two');
    break;
    case 3 : console.log('Three');
    break;
    case 4 :  console.log('Four');
    break;
    case 5 : console.log('Five');
    break;
    case 6 : console.log('Six');
    break;
    case 7 :  console.log('Seven');
    break;
    case 8 : console.log('Eight');
    break;
    case 9 : console.log('Nine');
    break;
    default : console.log('Invalid No : ');
}
//Read Number Display Week Day
const myArgs=process.argv.slice(2);
let day=parseInt(myArgs[0]);
console.log('The day is : '+day);
switch(day){
    case 1 :  console.log('Sunday');
    break;
    case 2 :  console.log('Monday');
    break;
    case 3 :  console.log('Tuesday');
    break;
    case 4 :  console.log('Wednesday');
    break;
    case 5 :  console.log('Thursday');
    break;
    case 6 :  console.log('Friday');
    break;
    case 7 :  console.log('Saturday');
    break;
    default :  console.log('Invalid Date Given !');
}
//Read Number Display One Ten Hundred Thousand
const myArgs=process.argv.slice(2);
let input=parseInt(myArgs[0]);
switch(input){
    case 1 : console.log('Unit');
    break;
    case 10 : console.log('Ten');
    break;
    case 100 : console.log('Hundred');
    break;
    case 1000 : console.log('Thousand');
    break;
    default : console.log('Not in unit,ten,hundred,thousand !');
}
//Feet To Inch and Meters
const myArgs=process.argv.slice(2);
let input=parseInt(myArgs[0]);
let choice=parseInt(myArgs[1]);
console.log('Length in Feet is : '+input+' feets');
const FEET_TO_INCH_FACTOR=12;
const FEET_TO_METER_FACTOR=0.3048;
switch(choice){
    case 1 : console.log(input+' feets is converted to inches : '+input*FEET_TO_INCH_FACTOR+' inches');
    break;
    case 2 : console.log(input+' feets is converted to meters : '+input*FEET_TO_METER_FACTOR+' meters');
    break;
    default : console.log('Choose Proper Converter : (1 or 2) : ');
}