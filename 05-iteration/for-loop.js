//for loop basic

for(let i=0;i<10;i++){
  // console.log(i);
}

// nested for loop  

for(let index=0;index<=10;index++){
  // console.log(`\nOuter for loop for index :${index}\n`);
  for(let innerIndex=0;innerIndex<=10;innerIndex++){
    // console.log(`Inner for loop for index ${innerIndex} and outer index ${index}`);
  }
}

//printing table using nested for loop


for(let index=0;index<=10;index++){
  // console.log(`\n             Table of ${index}             \n`);
  for(let innerIndex=0;innerIndex<=10;innerIndex++){
    // console.log(index + " * " + innerIndex + " = " + index*innerIndex);
  }
}

//for loop for array

let myArray=['Naruto','Sasuke','Nagato','Kakashi','Obito','Madara','Itachi','Minato','Hashirama','Jiraya']

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  // console.log(element);
}

//break and continue

for(let i=0;i<10;i++){
  if(i==5){
    // console.log('Detected 5');
    break;//jumps out of loop
  }
  // console.log(i);
}

//continue skips the current iteration and moves to the next one

for(let i=0;i<10;i++){
  if(i==5){
    console.log('Detected 5');
    continue;//jumps out of loop
  }
  console.log(i);
}




