//construct 
// const myObj=new Object()
// const myObj={}
// myObj.name="John"
// myObj.age=30
// myObj.isLoggedin=true
// console.log(myObj);

//how to concat two objects

const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
//1st method
const obj3=Object.assign({},obj1,obj2)
console.log(obj3);
//2nd method
const obj4={...obj1,...obj2}
console.log(obj4);

const users = [
  {
      id: 1,
      email: "h@gmail.com"
  },
  {
      id: 1,
      email: "h@gmail.com"
  },
  {
      id: 1,
      email: "h@gmail.com"
  },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//***********************destructuring of objects************************** */
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
}
//why to do destructuring?=>when we want to access a object property multiple times we cannot write course.propertyname every time thus we use destructuring and  assign it to a variable to reuse it in a easier way

// course.courseInstructor
//this how it is done
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
//now we just use instructor every time we want to access the property
console.log(instructor);

//whenevr we want to send data to a api or get a data from api it is always in the form of json
//json format
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
//API=>it does our work in background 
[
  {},
  {},
  {}
]