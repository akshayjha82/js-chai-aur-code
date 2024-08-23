// how inheritance works in js

const teacher = {
  makevideo : true
}

const teachereditor = {
  editvideo : true
}

const teacherstaff = {
  managechannel : true
}

// 1st way 
  const student = {
     study: false,
     learnfrom_ChaiaurCode : true,
     __proto__ : teacherstaff
  }

  // now student can accses the props of teacherstaff object

  // 2nd way 
  teacherstaff.__proto__ = teacher

  // 3rd way =.modern way

  Object.setPrototypeOf(teachereditor,teacher)
  // console.log(teachereditor.makevideo);
  

  // some prototype concepts
myheros = ["spidy",'senku']

const herosabiliyt = {
  fly : true,
  superpower : true
}

Object.prototype.sayHello = function () {
  console.log(`Heloo from Object baba`);
}

// herosabiliyt.sayHello();
// myheros.sayHello();

Array.prototype.greets = function () {
  console.log(`Heloo from array baba`);
}

// myheros.greets();
// herosabiliyt.greets();

// Project 
// Our aim is to create a function that returns a true length of a string basically removing all ths space after the actual word EG=>I/P:"Akshay  "  ,  O/P:6

const myname = "Akshay           "

// console.log(myname.length)
String.prototype.trueLenght = function(){
    console.log(`${this}`)
    console.log(`The true lenght is ${this.trim().length}`);
}

myname.trueLenght();
"sdhbcmsd        msdbjcmsc      cmdbjc         ".trueLenght()