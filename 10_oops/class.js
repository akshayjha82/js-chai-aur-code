class User {
  constructor(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword(){
    return `${this.password}#123`
  }

  logMe(){
    console.log(this.username);
  }
}

const user = new User("akshay","email@emal.com",13242);
user.logMe();
console.log(user.encryptPassword());

// behind the scene
function User2(username,email,password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User2.prototype.encryptPassword = function(){
  return `${this.password}#123`
}
User2.prototype.logMe = function(){
    console.log(this.username);
}

const newuser = new User2("ajay","mamala@gmail.com",2121)
newuser.logMe();