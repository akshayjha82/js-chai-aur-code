function multiplyby5(num) {
  return num*5;
}

multiplyby5.power = 2 
// console.log(multiplyby5(5));
// console.log(multiplyby5.power)
 // as a function can accses the properties of an object this proves that it is a object 

// console.log(multiplyby5.prototype) 
// this prints "{}" this means that the whole context of the function is present in prototype

 // this keyword is directly related to prototype
//  `this` refers to the context in which a function is called. It usually points to the object that is calling the function.
// In summary, `this` provides context within a method or function, often referring to the object that invoked the method, while prototypes allow objects to share methods and properties. When methods on a prototype are invoked, this refers to the instance calling the method, not the prototype itself

// we can create a method in prototype and acses those methods 

function createUser(name,score) {
    this.name = name;
    this.score = score
}

createUser.prototype.updateScore = function () {
  this.score++;
  return this.score;
}

const newuser = new createUser('akshay',24)
const newuser2= createUser('amar',25)

console.log(newuser.updateScore()) // it can accses the prototype becoz of new keyword connects the prototype with the variable while the second user will not get any output


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
