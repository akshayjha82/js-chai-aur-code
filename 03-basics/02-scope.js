// using var to declare variables creates problem as it doesn't obey scope 

// var c=300
let a=200

if (true) {
  let a=10
  const b=20
  var c=30  
}

// console.log(c);//output:30 it will not give 300 
// console.log(a);//200

function one() {
  const userName="Akshay"
  function two(params) {
    const website=" raju.com"
    console.log(userName+" welcome to"+website)
  }
  // console.log(website)
  two()
}
// one()

if (true) {
  let lenght=20
  if (lenght===20) {
    const width=5
    // console.log(lenght*width)
  }  
  // console.log(width);
}
//*****************Intro to Closure ***************************/

console.log(addOne(7))//it will run and give proper output 8
function addOne(num){
  return num+1
}

//in this type of function declaration if the function is executed before its declaration it will noty run 
const addTwo=function (value) {
  return value*2
}
console.log(addTwo(2));