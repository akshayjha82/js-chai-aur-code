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


const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
  {},
  {},
  {}
]