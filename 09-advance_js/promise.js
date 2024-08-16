// Promise is basically used for async operations .It is a object that determines whether the async operation is executed or not Or {The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.} 
// It is mostly used for db calls

const promiseOne = new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("Async operation 1");
    resolve();//only when resolve is called in promise function that the "then" function will be executed 
  },1000)
})

promiseOne.then(function(){
  console.log("Operation 1 sucessfully executed");
})

const promiseTwo = new Promise(function(resolve,reject){
  setTimeout(function(){
    if(false){
    console.log("Async operation 2"); 
    }
    else{
      reject();//only when reject is called in promise function that the "then" function will be executed
    }
    
  },1000)
})

promiseTwo.catch(function(){
  console.log("Operation 2 Failed");
})

// there is a another way to create a promise 

new Promise(function(resolve,reject){
  setTimeout(()=>{
    console.log("Async 3")
    resolve({username:"Akshay",id:"akshay@mmmgmail.com"}) // we can pass data through resolve thsi way to be used in then block
  },1000)
}).then(function (user) {
  console.log(user)
})

const promiseFive = new Promise(function(resolve,reject){
    let error = true;
    setTimeout(()=>{
      if(!error){
        console.log('Async 5 to be executed');
        resolve({username:"Akshayj",pass:"Akshay24424"})
      }
      else{
        reject("ERROR:Something went wrong")
      }
    },2000)
})

promiseFive
.then(function (user) {
  console.log("Async 5 is being waited in queue");
  return user.username;
})
.then(function (username) {
  console.log(username);
})
.catch((message)=> console.log(message))
.finally(()=> console.log("Either then or catch will be executed"))

// async and await
const promiseSix = new Promise(function(resolve,reject){
  let error = true;
  setTimeout(()=>{
    if(!error){
      console.log('Async 6 to be executed');
      resolve({username:"Amar",pass:"242424"})
    }
    else{
      reject("ERROR:Js went wrong")
    }
  },2000)
})

async function consumepromiseSix() {
  try {
    const response = await promiseSix
    console.log(response);
  } catch (error) {
    console.log(error)
  }
  
}

consumepromiseSix()

// async function consumefetch() {
//   const response = await fetch("https://api.github.com/users/hiteshchoudhary")
//   const data = await response.json()
//   console.log(data);
// }
// consumefetch()

// same fetch we use with then and catch

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response)=>{
  return response.json()
}).then((data)=>{
  console.log(data);
})
.catch((error)=>{
  console.log(error)
})