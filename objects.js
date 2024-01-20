//objects contain more variables
car={
    model:"BMW",
    country:"germany",
    ranking:"TOP 20",
speed:"fast",
};
console.log(car.country);
//using method
const person={
  Fname:"reuben",
  Lname:"richard",
  age:20,
  level:"university",
  fullName:function(){
    return this.Fname +""+ this.Lname;
  }
};
console.log( "hello world my names are" + person.fullName() + "i am "+person.age +"years old currently in" + person.level);