let temperature=48

// if(temperature>30){
//   console.log("summer");
// }

// if(temperature>30){
//   console.log("summer");
// } else{
//   console.log("winter");
// }

// if(temperature>40) console.log("sumer");

// if (temperature==48) console.log("it is summer"),console.log("it is holiday");

// comparison operators
// =,==(type coercion),!=,<=,>=,===(strict comparison),!==

const marks=79

// if (marks>60) {
//   console.log("A Grade");  
// } else if (marks>50 && marks<=60){
//   console.log("B Grade");
// }else{
//   console.log("Fail");
// }

const userLoggedin=true
let validEmail=true
let username="Akshay"

if(validEmail && userLoggedin){
  console.log(`Welcome to web ${username}`)
}

if (validEmail || 2==3) {
  console.log("helooo")
}

const naam="Akshay" || "Jha"
console.log(naam);//Akshay

const naam2="Akshay" && "Jha"
console.log(naam2);//Jha
