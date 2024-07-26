// simple while loop

/*
let i=0
while(i<10){
  console.log(i)
  i++
}
*/

//nested while loop

/*
let i=1;
while(i<=10){
  let j=1;
  while(j<=10){
    console.log(`${i} * ${j} = ${i*j}`);
    j++;
  }
  i++;
}
*/

//while loop for array

let myArray=['Naruto','Sasuke','Minato']

let i=0
while(i<myArray.length){
  // console.log(myArray[i]);
  i++
}

//do while loop

let index=0;
do {
  console.log(index);
  index++;
} while (index<10);

//*********************Note************************** */

//while and for loop are also known as entry control loop whereas dowhile is known as exit control loop