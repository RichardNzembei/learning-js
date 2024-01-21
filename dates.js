//declearing dates
const d= new Date();
console.log(d);
//convert date to string
const dat=new Date();
console.log(dat.toDateString());
//get methods for dares
const year=new Date();

console.log(year.getFullYear());
console.log(d.getMonth());

console.log(d.getDate());
//creating arrays with days
const  days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
const dayee=new Date();
let currentday=days[dayee.getDay()];
console.log(currentday);
//calculating number of years since a certain year
//calculating the number of milliseconds in a year
const minutes=1000*60;
const hours=minutes*60;
const dayes=hours*24;
const years=dayes*365;
let yeares=Math.round(Date.now()/years);
console.log(yeares);
//comparing dates
const today=new Date();
const someday=new Date("2025-11-01");
someday.setDate("2025-11-01");
if(someday>today){
    console.log("thats richards next birthday");
}
else{
    console.log(`richard will be turning 21 in ${someday}`);
}