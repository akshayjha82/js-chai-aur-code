// it is used in case we want to run/check any condition on array items which is not directly possible in foreach loop.We can check conditions in foreach loop but for that we have to build  our own logical code   

const myNums=[1,2,3,4,5,6]

//if we want index and num  separately we can get by passing two arguments 

// myNums.forEach((index,num)=>{
//   console.log(num,index);
// })

//suppose we want the numbers greater than 4, how can we do that in for each loop
const newNum=[]
myNums.forEach( (num)=> {
  if (num>=4){
      newNum.push(num)
  }
} )

// console.log(newNum);
//same output can be generated in one line if we use filter

 const newnums2 = myNums.filter( (num) => num >= 4 )
//  console.log(newnums2);

 //filter is used to get the new array which contains the items that pass the test(or condition) implemented by the  provided function

 //suppose there is a array contaning data on differnt books and we want book as per user requests .It can be donw using filter
 const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

//user wants data on books having genre 'Fiction'
let userRequest = books.filter( (bk) => bk.genre==='Fiction')
// console.log(userRequest)

//user wants data on books having genre 'Fiction' and published after 2000
userRequest=books.filter( (bk) => bk.genre==='Fiction' && bk.publish>=2000 )
console.log(userRequest)

