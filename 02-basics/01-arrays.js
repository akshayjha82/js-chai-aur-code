// ***********************Arrays*********************************
const myarray=[1,2,3,4,5]

// console.log(myarray[3]);

//************************array methods**************************

 myarray.push(8)
// console.log(myarray);
myarray.pop()
// console.log(myarray);
myarray.unshift(0)
// console.log(myarray);
myarray.shift()
// // console.log(myarray);
// console.log(myarray.includes(3))
// console.log(myarray.indexOf(2));

const newArray=myarray.join()
// console.log(typeof newArray,`${newArray}`);

// const newary2=myarray.copyWithin(3,2,4)
// console.log(newary2);//output:[1,2,3,3,4]

// ******************slice and splice***********************************

console.log(myarray.slice(1,3))
console.log(`A :${myarray}`)

console.log(myarray.splice(1,3))
console.log(`B :${myarray}`)
//splice deletes the mentioned data whereas slice dosent delets data
//*********************************************************
/*output
[ 2, 3 ]
A :1,2,3,4,5
[ 2, 3, 4 ]
B :1,5
*/