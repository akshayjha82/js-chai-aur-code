// there are some assumed true and false values in js language

const userEmail="akshayjha@gmail.com"

if(userEmail){
  console.log(`Welcome ${userEmail}`);
}
else{
  console.log("Don't have a user email");
}
//here we didn't checked any condition just put a srting in place of condition but since js recognises string as a true value it enter the if expression

// falsy values
// 0,-0,false,"",BigInt => 0n, null, undefined, NaN

// truthy values
// "0","false", " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { // `Object.Keys(any object)` or `Object.Value(any object)`  this converts the passed object into a array and thus we can use methods of array
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
// it generally holds the first value by default but if null or undefined are present then it takes the other value
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = 15 ?? undefined //in it's place can be a complex function which return's some value but sometime  it returns undefined or null in that case we give a default value to it

val1 = null ?? 10 ?? 20
// val1=null ?? undefined



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

//*********************************Imp Note*********************************************:
/* 
false=0, =>true
false="", =>true
0="" =>true
*/