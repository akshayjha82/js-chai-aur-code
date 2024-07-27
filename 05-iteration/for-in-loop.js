//for in loop cannot be used on maps

let myObj={
  "name":"Akshay",
  "age":25,
  "city":"delhi"
}

for (const key in myObj) {
// console.log(key, myObj[key]);
}

let myArr=[1,3,4,3,5,2,5]

for(const key in myArr){
  // console.log(myArr[key]);
}

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

for(const key in ObjInArr){
  // console.log(ObjInArr[key].age);
}
//this loop does not works on map 
const myMap=new Map()

myMap.set("In","India")
myMap.set("fr","france")
myMap.set("pk","pakistan")
myMap.set("sl","sri lanka")
myMap.set("uk","united kingdom")

for (const key in myMap) {
 console.log(key);
}