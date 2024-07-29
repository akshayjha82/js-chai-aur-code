//map are used when we want to perform operations on items of array 

//if we want to add 10 in the items of the given array using foreach 

let myarr=[1,2,3,4,5,6,7,8,9,10]
let newarr=[]
myarr.forEach((num)=>{
    newarr.push(num+10)
})

// console.log(newarr)

//same can be done in one line if we use map
newarr=myarr.map((num) => num+10 )
// console.log(newarr)

//************************************CHAINING**************************************

//it is used when we want to perform multiple operations on array items at a time

newarr=myarr.map( (num) => num*10 ).map((num) => num+1 ).filter((num) => num>=21 )
console.log(newarr)
//each succeding method has access to value which are passed by there precending methods 

