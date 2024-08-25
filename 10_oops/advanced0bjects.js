console.log(Math.PI);
Math.PI = 4
console.log(Math.PI);

//  we cannot overwrite te value of math.pi as it's writable property is set to false that means we cannot overwrite it .
// How can we check the properties of inbuilt methods 

const props = Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(props);

// If we built our own object We can also make it so that the value of a property becomes unchangeble

// const myObj = Object.create(null)

const myObj = {
  name: {
    firstName:"Aksay",
    midName:"ashd",
    lastName:"kumar"
  },

  email:"sbcm@gama.com",
  id:2222121
}

// console.log(Object.getOwnPropertyDescriptor(myObj,'name'));
Object.defineProperty(myObj,'name',{
  writable:false,
  enumerable:false
})
// console.log(Object.getOwnPropertyDescriptor(myObj,'name'));

for (const [key,value] of Object.entries(myObj)) {
  console.log(`${key} ; ${value}`);
}

// bcoz enumerable props is off it will not iterate over name 


