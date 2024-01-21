//they can be used without creating objects for them
console.log(Math.E);
console.log(Math.PI); 
console.log(Math.SQRT2); 
console.log(Math.LN2); 
console.log(Math.LN10); 
console.log(Math.abs(-2,6)); 
let value=Math.asin(0.89399); 
console.log(value*180/Math.PI);
console.log(Math.sin(90));
console.log(Math.sin(90*Math.PI/180));
console.log(Math.pow(2,2));
//finding max and min value using math.min and math.max
console.log(Math.max(6,87,3,9,456));
console.log(Math.min(6,87,3,9,456));
//using math.random
console.log(Math.random());
//using sigh method
console.log(Math.sign(2));
console.log(Math.sign(0));
console.log(Math.sign(-5));
//using math.floor im math.random to return intergers from 0 to 9
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  console.log(getRandomInt(5,8));
  //trial
  console.log(Math.floor(Math.random() * 10) );
  