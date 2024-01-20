// declearing strings
let myName="richarrd nzembei reuben";
console.log(myName);
//string length
let length=myName.length;
console.log(length);
//extracting string characters
let char=myName.charAt(2);
console.log(char);
//using charcodeat
let chaar=myName.charCodeAt(2);
console.log(chaar);
//changing to uppercase
let text2=myName.toUpperCase();
console.log(text2);
//joining two strings
let fName="richie";
let lName="reuben";
let fullName=fName.concat("", lName);
console.log(fullName);
//string repeat
let result=fName.repeat(3);
console.log(result);
//using sring replace
let greetings=" hello everyone feel free to participate this bootcamp with everyone";
let replacedwordbe=greetings.replace("everyone","robin");
console.log(replacedwordbe);
//replace only replaces the first match
//replaceall replaces all instances 
let replaceallwordbe=greetings.replaceAll("everyone","robin");
console.log(replaceallwordbe);
//string search
let yourName="reuben innit";
let search=yourName.search("innit");
console.log(search);
//string templates
let mycourse=`im a comp science 
student
2.2,
currently working on javascript`;
//they allow multiline strings
console.log(mycourse);
//string interpolation
function myDetails(Name,school,age){
    return `i am ${Name} currently studying at ${school} .my age is ${age}`;
}
console.log(myDetails("richaard","kabarak","20"));
//using calculations
function sum(num1,num2){
    return ` ${num1+num2}`;

}
console.log(sum(3,8));
//print a name using interpolation
let trends="tiktok has been the most trending plaform off late";
console.log(`${trends}`);
//variable substitutions
let model="hp";
let make="elitebook";
let specs=`my new laptop is ${model},${make}`;
console.log(specs);
//sring expression substitution
let price=100;
let VAT=0.25;
let  FINALPRICE=`${price*(1+VAT).toFixed(2)}`;
console.log(FINALPRICE);
//usng tofixed() to set no of decimal places
let addition=0.454;
console.log(addition.toFixed(2));