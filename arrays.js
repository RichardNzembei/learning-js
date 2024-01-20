const cars=["BMW","Benz","Audi"];
console.log(cars);
//providing values of the array elements
const myDetails=[
    name="reuben",
    school="kabarak",
    age=20
];
console.log(myDetails);
//using new constructor
const food=new Array("minced meet","rice beef","pizza");
console.log("my favourite food is" + food);
console.log(food.length);
console.log(food[1]);
//changing array values
 food[2]="fries";
console.log(food);
//converting an array to string
console.log(food.toString());
//lenght property
console.log(food.length);
//ACCESSING THE LAST ARRAY ELEMENT
let food1=food[food.length-2];
console.log(food1);
//looping through an array using for
for(let i=0;i<food.length;i++){

    console.log(food[i]);
}
//using while loop
let f=0;
while(f<food.length){
    console.log(food[f]);
    f++;
}
//map method
let c=0;
let array1=[1,2,3,4,5,6];
//using for each item
array1.forEach(myfunction);
function myfunction(item,c){
    console.log(item);
}
//using for every ()method
const array2=c=>c<5;
if(array1.every(array2)){
    console.log("all numbers are greater than five");

}
else{
    console.log("only one number is greater than five");
}
//using map method
let square=c=> Math.pow(c,2);
square=array1.map(square);
console.log(array1);
console.log(square);
//using filterv method
let even=c=>c%2===0;
 even=array1.filter(even);
console.log(even);
//using the reduce method
const helpersum=(acc,cur)=>acc+cur;
const sum=array1.reduce(helpersum,0);
console.log(sum);
//using some method
let array3=[2,3,4,5,6,7];
let g=0;
const lessthanthreecheck=(g)=>g<3;
const lessthanthree=array3.some(lessthanthreecheck);
if(lessthanthree){
    console.log("atleast one element is less than 3");
}
else{
    console.log("all elements are greater than three");
}
//adding elements to an array using push
let names=["wyclife","mwendwa","ndambuki"];
names.push("nzembei");
console.log(names);
console.log(Array.isArray(names));
//using pop to remove the last element of an array
console.log(names.pop());
console.log(names);
//searching an array using indexof
let position=names.lastIndexOf("mwendwa");
console.log(position);
//using find to search for array elements
const numbers=[5,6,8,9,45];
let first=numbers.find(mynumber);
function mynumber(value,index,array){
    return value>5;
}
console.log(first);
//array  sort and reduce
let fruits=["bannanas","mangoes","apple","grapes"];
fruits.sort();
fruits.reverse();
console.log(fruits);
//using tosorted()
const sorted=fruits.toSorted();
console.log(sorted);
//using numering sort
let points=[1,40,100,78,3,45,76];
points.sort();
console.log(points);
points.sort(function (a, b) {return a-b
    
});
console.log(points);
//reversing in a numeric order
points.sort(function(a, b){return b-a});
console.log(points);
function myarraymin(arr){
    return Math.max.apply(null,arr);
    }
    console.log(myarraymin(points));
