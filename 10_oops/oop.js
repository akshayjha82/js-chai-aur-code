// whenevr we create a function in a project we basically use the same name as arguments so as to reduce the load of comimgup with a name of multiple variables .Now when we use the same name it creates confusion for the node to to choose which one is variable and which one is not thus we use "this" keyword ."this" is a object which refers to current context any function i.e it holds all the data of that function. 

function User(username,isloggedin,loggincnt){
  this.username = username
  this.isloggedin = isloggedin
  this.loggincnt = loggincnt

  return this
}

// first apprach without using new keyword

const userone = User("akshay",true,8)

// console.log(this.username); // OUTPUT : "undefined" bcoz this refers to global context and tehre is no username defined in global.

const usertwo = User("raju",false,2)
// console.log(userone.username); // Expected Output:akshay , Output: "raju" This happens bcoz the new usertwo overwrote the value in origianl User function 

// new keywrod creates a copy /instance of og function and thus whater=ver cjhnages we make it happens in the copy and not the og function

// second apprach
const user3 = new User("ram",true,4)
const user4 = new User("four",false,5)
console.log(user3.username)// ram
console.log(user4.isloggedin)// false

// steps that happens when we use a new keyword
/*
1)create a new object
2)calls a constructor function which wraps arguments and sends to that variable 
3)this ke andar sare data aa jate hai
4)and now we can access values  
*/



