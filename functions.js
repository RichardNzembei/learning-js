//create a function called sum

function sum(a){
    return a*a;
}
console.log(sum(3));
//calling a function
function mySum(g1,g2){
    return g1*g2;

}
const result=mySum(6,7);
console.log(result);
//function expression
const mydetails=function(num1,num2){
    return  num1*num2;
};
const x=mydetails(5,7);
console.log(x);
//function to convert fanrenheit to celcius
function tocelcius(fanrenheit){
  console.log(fanrenheit-32 )*(5/9);
    
}
let temp=tocelcius(77);
//illustration code of function calling
function myMessage(name){
    return("hello"  + name +  "welcome to the javascript journey");
}
//creating a variable
let theName="Reuben";
console.log(myMessage(theName));


