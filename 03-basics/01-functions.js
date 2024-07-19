function SayHello() {
  return `hello world`
}
const greetins=SayHello()
// console.log(greetins)

function addTwoNumbers(number1,number2){
  return number1+number2
}
const result=addTwoNumbers(12,44)
// console.log(result)
// console.log(addTwoNumbers(12,44))

/*
function justLoggedIn(name){
  return `welcome ${name} to the website`
}
 
const loggedInMessage=justLoggedIn("raju")
console.log(loggedInMessage)
*/ 
function justLoggedIn(name){
  // if(name===undefined)
  if(!name)                   // if the user has not entered name parameter then it becones undefined and undefined is equivalent to false `!` this sign means negation and negation of false means tru thus it will execute the f block whenevr user has not eneterd the name
  {
    console.log(`Please enter the name`);
    return 
  }
  return `welcome ${name} to our website`
}
 
// const loggedInMessage=justLoggedIn("raju")
// console.log(loggedInMessage)
// console.log(justLoggedIn("Akshay"));

//********************rest Operator*********************** */
//when we don't know the numbers of argument which will come during calling of function then we use rest operator it converts the received arguments into array of numbers or whatever data they pass UseCase:When we develop a ecommerce web and don't know how many items will be in the cart but we have to calculate the the total price by adding the price of those items

function calculatePrice(...numbers)// "..." this is the rest operator, it is also used for spread operator
{
  return numbers
}

// console.log(calculatePrice(200,330,3323,44,"aa",21,22));


//how to use a array or object in a function as parameter 
const biodata={
  name:"Akshay",
  age:22,
  gender:"male",
  hobbies:["cricket","football","reading"]
}

function Definedata(anyObject){
  return `${anyObject.name} has completed Computer science and data science and now is of age ${anyObject.age}`
}
// console.log(Definedata(biodata));
// const displayData=Definedata({name:"Akshay",age:19})
// console.log(displayData);
console.log(Definedata({name:"Akshay",age:19}));
//same can be done for array
