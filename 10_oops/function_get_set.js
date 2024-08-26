function User(email,password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this,'email',{
    get email(){
        return `${this._email.toUpperCase()}ahvsdjvcsd`
    },
    set email(value){
        this._email=value
    }
  })
}

const user =  new User("chai@chai.com",12e2323)

console.log(user._email);
