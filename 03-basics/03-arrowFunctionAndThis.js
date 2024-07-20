//'this' refers to current context

const user={
  username:"Akshay",
  price:500,
  welcomeMessage:function(){
      // console.log(`${user.username} welcome to the website`)
      console.log(`${this.username} welcome to the website`)
  }
}
// console.log(user.welcomeMessage());
// console.log(this);=>returns empty object=>{}

function chai() {
  console.log(this);//=>returns global object
}
// chai()
//printing 'this' in a normal function returns a global object 

//8*****************************Arrow function *****************************
//there are 3 ways in which we can decalre an arrow function 
//1) 
const addOne=(num1,num2)=>{
  // console.log(this);//this retruns =>{}
  return num1+num2
}
// console.log(addOne(2,4));

//2)when we remove {}curly brackets we don't need to write return to return the value this is called as implicit return 
const addTwo=(num1,num2)=>  num1+num2;
console.log(addTwo(2,3))

//3)
const addThree=(num1,num2)=>  (num1+num2);
console.log(addTwo(2,3))
