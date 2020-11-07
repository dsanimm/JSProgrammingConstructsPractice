//Read Number And Write In Words
let number=Math.floor(Math.random()*10);
console.log('The number is : '+number);
if(number==1){
    console.log('One');
}else if (number==2){
    console.log('Two');
}else if(number==3){
    console.log('Three');
}else if(number==4){
    console.log('Four');
}else if(number==5){
    console.log('Five');
}else if(number==6){
    console.log('Six');
}else if(number==7){
    console.log('Seven');
}else if(number==8){
    console.log('Eight');
}else if(number==9){
    console.log('Nine');
}else
console.log('Zero');
//Read A Number And Display Day
const myArgs=process.argv.slice(2);
let day=parseInt(myArgs[0]);
console.log('The day is : '+day);
if(day<1 || day >7){
    console.log('Invalid Date Given !')
}else if(day==1){
    console.log('Sunday');
}else if(day==2){
    console.log('Monday');
}else if(day==3){
    console.log('Tuesday');
}else if(day==4){
    console.log('Wednesday');
}else if(day==5){
    console.log('Thursday');
}else if(day==6){
    console.log('Friday');
}else if(day==7){
    console.log('Saturday');
}else
console.log('Day Not Found !'); 
// Read A Number And Display Unit Ten or Hundred
const myArgs=process.argv.slice(2);
let input=parseInt(myArgs[0]);
if(input==1){
    console.log('Unit');
}else if(input==10){
    console.log('Ten');
}else if(input==100){
    console.log('Hundred');
}else if(input==1000){
    console.log('Thousand');
}else
console.log('Not in unit,ten,hundred,thousand !'); 
// Find Max Min after arithmetic operation
const myArgs=process.argv.slice(2);
let a=parseInt(myArgs[0]);
let b=parseInt(myArgs[1]);
let c=parseInt(myArgs[2]);
let opn1 = a+b*c;
let opn2 = c+a/b;
let opn3 = a%b+c;
let opn4 = a*b+c;
console.log("Maximum is: "+Math.max(opn1,opn2,opn3,opn4));
console.log("Minimum is: "+Math.min(opn1,opn2,opn3,opn4));

