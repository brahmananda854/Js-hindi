let myArray = ["JS","Python", "OOPS"];

const newvalue = myArray.forEach( (item)=>{return console.log(item)} )
console.log(newvalue);   // undefined it means forEach loop never returns any value 
// Thats why we introduce filter, map and reduce

let exarr= [1,2,3,4,5,6,7,8,9,10];
//const newnums= exarr.filter((num)=>{return num>4} )  //returns values  {} used so write return
const newnums= exarr.filter((num)=>( num>4) ) 
//console.log(newnums);

//now we can use forEach to get the value by using condition

let newvalue1 = [];

// exarr.forEach( (num)=> {if (num>4) {
//     newvalue1.push(num);
// }})
// console.log(newvalue1);
//++++++++++++++++++++++++++++++++++++++++++HIGHER ORDER FUNCTIONS+++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++FILTER +++++++++++++++++++++++++++++++++++++++++++++
// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')

//   userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"   //filter returns conditionally satified values
// })
//   console.log(userBooks);

//+++++++++++++++++MAP FUNCTION+++++++++++++++++++++++++++++++++++++++++++++

let num=[1,2,3,4,5,6,7,8,9,10];
//const newNums = num.map((num1) => (num1+10) )  // MAP function always tranforms each value given to this
//console.log(newNums);

//chaining 
// const newNums =num.map((num1) => (num1*10) ).map((num)=>(num+1)).filter((num)=>(num>=40));
// console.log(newNums);

//++++++++++++++++++++++++++++++++++++++++++REDUCE METHOD+++++++++++++++++++++++++++++++++++++++++++++++


// const myNum =[1,2,3];
// // const initialValue = 0;
// const newNum = myNum.reduce((acc,curr)=> acc+curr,0);
// console.log(newNum);

// const shopingCart = [
//     {
//     course:"C",
//     price:400,
// },
// {
//     course:"js",
//     price:300,
// },
// {
//     course:"C++",
//     price:500,
// },
// {
//     course:"python",
//     price:100,
// }
//         ]


// const Initial_value = 0;

// const total = shopingCart.reduce((acc,curr)=>(acc+curr.price),Initial_value)
// console.log(total);

