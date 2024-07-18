//object can be defined in two ways a)via constructor b) literal
//when we create a object via constructor it becomes ****{singleton}****=>it means we cannot use template of that object
//constructor
//1)

/*
const person={
  name:"akshay",
  rollNo:35
}
const newObj=Object.create(person)
console.log(newObj.name)
*/

//2)
// const obj=new Object()
// obj.name="akshaya"
// console.log(obj.name);


//object literal
// const person={
//   name:"akshay",
//   rollNo:35,
//   email:"akshay@gggmail.com",
//   city:"dahisar",
//   pin:20202
// }
/*
console.log(person.name);
console.log(person["name"]);
*/ 

//if we want to reference a symbol in object then this is how we can do it
//1)
/*
const mySym=Symbol("key1")
person[mySym]="value1"
console.log(person[mySym]);
*/
//2)
const mySym=Symbol("key1")
const person={
  name:"akshay",
  rollNo:35,
  [mySym]:"raju",//this is how we define a symbol inside object
  email:"akshay@gggmail.com",
  city:"dahisar",
  pin:20202,
  isLoggedin:true
}
//we can only acsses teh symbol from object using the [] syntax and not dot syntax

//If we want to make it so that no further changes can be made inside onject then we can do that using freeze method of objects
//Object.freeze(person)

//how to create function in object
person.greetings=function(){
  console.log("hello folks");
}

console.log(person.greetings());

person.greetingsTwo=function(){
  console.log(`hello folks ${this.name}`);
}
console.log(person.greetingsTwo());