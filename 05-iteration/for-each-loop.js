//it is actually a in built method of array used for iterating over array

let arr=['a','b','c','s','m']

arr.forEach(function (key){
  // console.log(key);
})

function greetings(key){
  // console.log(`Welcome to ${key}`);
}

let myArr=['Jammu','Assam','Mumbai','Delhi']
myArr.forEach(greetings);

myArr.forEach((key)=>{
  // console.log(`Welcome to ${key}`)
})

let ObjInArr=[
  {
    name:"Akshay",
    age:25
  },
  {
    name:"Amar",
    age:24
  },
  {
    name:"Akbar",
    age:29
  },
  {
    name:"Anthony",
    age:22
  }
]

ObjInArr.forEach(function(key){
  console.log(key.name);
})