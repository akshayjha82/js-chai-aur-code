// call passes it's own execution context to some other function

const setUsername = function (username){
  this.username = username;
  console.log("called");
  
}

function CreateUser(username,email,passwrd) {
  setUsername.call(this,username) // after this it will hold all the variables 
  this.email = email;
  this.passwrd = passwrd
}
const chai = new CreateUser("akshay","akshay@gmail",123)
console.log(chai); //O/P:CreateUser { email: 'akshay@gmail', passwrd: 123 }
// in o/p there is no username printed as when we call setusername it is executed but the variables are dissolved as soon as it is called in createuser thus we have to keep it from dissolving we use call function it holds a reference of the function but still after that we cannot stop the username of steuser from getting dissolved thus we pass a argument in call function named `this` it passes it's own execution context to the calling function .

