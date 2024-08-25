class User {
  constructor(username){
    this.username = username;
  }

  logMe(){
    console.log(`Username is ${this.username}`); 
  }
}

class Teacher extends User {
  constructor(username,email,password) {
    super(username)
    this.email = email;
    this.password = password;
  }

  capitalize(){
    return `the username is ${this.username.charAt(0).toUpperCase()+this.username.slice(1)}`
  }
}

const user = new User("raja")
const teaxher = new Teacher("ritesh",'ritesh@gmail.com',123242)

// user.logMe()
// console.log(teaxher.capitalize());
// teaxher.logMe()

console.log(teaxher instanceof User);


