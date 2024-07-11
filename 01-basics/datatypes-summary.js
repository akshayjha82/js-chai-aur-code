//  Primitive(Call by value)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

/*
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //symbol even though given same parameter returns a different value for different variables
*/

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)(Call by reference)

// Array, Objects, Functions

/*
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
*/

// https://262.ecma-international.org/5.1/#sec-11.4.3

//Stack and heap

//in stack we are given a copy of data rather than original data whereas in heap we are given reference to original data 
let name='Akshay'
let petname=name
petname='Akki'

console.log(name);
console.log(petname);//this will print the new name akki it will not affect the original name variable

//heap

//here reference of original data is given

let myObj={
    email:"akshay2gmail.com",
    name:"Akshay"
}

let newObj=myObj

newObj.email="akki@gmail.com"

console.log(myObj.email);
console.log(newObj.email);// here both email will be affeted as both variable point to same data in the heap
