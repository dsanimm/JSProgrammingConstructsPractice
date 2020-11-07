// Random function get single digit
console.log(Math.floor(Math.random() * 10));
//Get a dice roll number 1 to 6
console.log(Math.floor(Math.random() * 6)+1);
// Two random dice number sum
console.log(Math.floor(Math.random() * 6)+ 2 + Math.floor(Math.random() * 6));
//Reads 5 Random 2 digit values and calculates sum and avg 
let arr=[];
let sum=0;
for(i=1;i<=5;i++){
    arr[i] = Math.floor(Math.random() * 90)+10;
    sum = sum+arr[i];
}
console.log("sum is : "+sum);
let average = sum/5;
console.log("average is : "+average);
//unit conversion
const FEET_TO_INCH_FACTOR=12;
console.log('Inch '+42+' is equal to '+42*FEET_TO_INCH_FACTOR+' feets .');
console.log('Rectangular plot 60*40 is equal to '+60*FEET_TO_INCH_FACTOR+'*'+40*FEET_TO_INCH_FACTOR);









