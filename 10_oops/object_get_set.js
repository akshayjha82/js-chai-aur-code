const User = {
  _email:"akshay@mm.com",
  _password:"12546474",

  get email(){
    return this._email.toLowerCase()+"amamama";
  },

  set email(value){
      this._email = value;
  }
}

const newUser = Object.create(User)
console.log(newUser.email);
