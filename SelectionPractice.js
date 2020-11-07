  //Take the 5 random 3 digit numbers and find max min
let a = Math.floor(Math.random() * 200) +100;
console.log(a);
let b = Math.floor(Math.random() * 200) +100;
console.log(b);
let c = Math.floor(Math.random() * 200) +100;
console.log(c);
if(a>b && a>c)
console.log("max is :"+a);
else if(b>c)
console.log("max is :"+b);
else
console.log("max is :"+c);
if(a<b && a<c)
console.log("min is :"+a);
else if(b<c)
console.log("min is :"+b);
else
console.log("min is :"+c);
// Find if day between March 20 and June 20
var myArgs = process.argv.slice(2);
let day=parseInt(myArgs[0]);
let month=parseInt(myArgs[1]);
console.log(process.argv);
console.log('Date is '+day+'/'+month);
if(month>=3 && month <=6){
    if(month==3 && day >= 20){
        console.log('True');
    }
    else if(month==6 && day <= 20){
        console.log('True');
    }else if(month==4 || month==5){
    console.log('True');
    }else 
    console.log('False');
}
if(!(month>=3 && month <=6)){
console.log('False');
}
// Find if Leap Year Or Not
var myArgs = process.argv.slice(2);
let year=parseInt(myArgs[0]);
console.log('Year is : '+year);
if((year%4 == 0 && year%100 != 0)||(year%400 == 0)){
    console.log('This Year '+year+' is Leap Year !');
}else
console.log('This Year '+year+' is Not Leap Year !'); 
// Find if heads or tails
let a = Math.floor(Math.random() * 2)>0 ? "heads" : "tails" ;
console.log(a);


