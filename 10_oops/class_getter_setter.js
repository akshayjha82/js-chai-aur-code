class User {
  constructor(email,password){
    this.email = email;
    this.password = password;
  }

  get password(){
    return this._password.toUpperCase();
  }

  set password(value){
    this._password = value;
  }
}

const user = new User("ajkshay@jhd.com",'14273')
console.log(user.password);
