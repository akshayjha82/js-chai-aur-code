//for of loop cannot be used for object

// basic for of loop on string and array 
let nums=[1,2,3,4,5]

for(const key of nums){
  // console.log(key);
}

let fruits=['apple','orange','mango','lichi']

for(const item of fruits){
  // console.log(item.charAt(2));
}

let str="Akshay Jha"

for(const item of str){
  if(item==" "){
    continue;
  }
  // console.log(item);
}

//for of loop in map 
//map are objects that holds key value pair.Each pair is unique no repeatition of pair is inserted in it  

const myMap=new Map()

myMap.set("In","India")
myMap.set("fr","france")
myMap.set("pk","pakistan")
myMap.set("sl","sri lanka")
myMap.set("uk","united kingdom")

//if we want whole pair as a array we use below code 
for (const item of myMap) {
  // console.log(item);
}
//if we want only key we use below code
for (const [key,val] of myMap) {
  // console.log(key);
}
//if we want only value we use below code
for (const [key,value] of myMap) {
  // console.log(value);
}

//if we want to use both separately
for (const [key,value] of myMap) {
  console.log(`${key} has value ${value}`);
}

//if we use for of on object it will not run

let myObj={
  "name":"Akshay",
  "age":25,
  "city":"delhi"
}

// for (const item of myObj){
//   console.log(item);
// }
