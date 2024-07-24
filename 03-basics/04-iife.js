//Immediately Invoked Function Expressions

//When we want to execute an function immediately as soon as it is created then we use iife
//it is generally used when we want the function connecting databse to frontend invoke upon running of application

function chai() {
  console.log("DB CONNECTED");
}
chai(); //it will immediately invoke it but probelm arises due to pollution of global variables for tha to be solved we use diiferent syntax
/*
()()
the first bracket is used to declare the function the second bracket is use to call it.
This syntax immediately invokes the function as soo as ot is created. 
*/ 

(function code(){
  console.log("DB CONNECTED Two");
})();//it will call the function immediately

//we can even use arrow function to be iife

((num1)=>{console.log(`Db connected ${num1}`);})(34)
//it will not run as we didn't terminated the first iife we have to terminate it using ";"