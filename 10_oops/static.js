// if we want a condition such that whenever user creates account he/she receives a id which is not to accsesed by them then we can use static

class User {
  constructor(username){
    this.username = username;
  }

  static createId(){
    return Math.floor(Math.random() * 1000000) + 1;
  }
}

const myUser = new User("akshay")

console.log(myUser);
console.log(myUser.createId());//throwig error bcoz static keyword doesn't allows to accses this function

