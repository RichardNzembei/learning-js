//basically checks wether a statement is  true or false
console.log(Boolean(10>7));
//anything without value is false
let x=0;
console.log(Boolean(x));
//boolean value of -0,null,undefine,false,empty string is zero
let value=-0;
let name="";
let Fname=undefined;
let expression=false;
console.log(Boolean(value));
console.log(Boolean(name));
console.log(Boolean(Fname));
console.log(Boolean(expression));
//redefining booleans as objects using new keyword
let a=false;
let b=new Boolean(false);
console.log(typeof(b));
//javascript comparisons
