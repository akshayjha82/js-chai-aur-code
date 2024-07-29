//it is used when we want to add the nums in array .Basically used when we wanrt to add all the items price in a cart

//it takes two values one accumulator and otehr currentValue .currentValue holds the items of the array.Accumulator initializes with a certain num which we give and adds that num to the currentVlaue in each iteration and at last returns the total addition of nums

let myarr=[1,2,3,4,5]

let newarr=myarr.reduce( (accumulator,currentValue) => {
    return accumulator+currentValue
},0 /*initial value which the accumulator holds */ )

// console.log(newarr);

//suppose we want to calculte total price of courses purchased by a certain student 

const shoppingCart = [
  {
      itemName: "js course",
      price: 2999
  },
  {
      itemName: "py course",
      price: 999
  },
  {
      itemName: "mobile dev course",
      price: 5999
  },
  {
      itemName: "data science course",
      price: 12999
  },
]

let totalPrice=shoppingCart.reduce((acc,currval)=>{
  return acc+currval.price;
},0)

console.log(totalPrice);


