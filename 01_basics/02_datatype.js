"use strict" ; // treat all JS code as newer version of JS not older version
//alert(3 + 3) // donot run alert as its node engine not browser

//DATATYPES

//1. Premitives (Copy of value is given to work on)
//2. Reference Types or non premitives
//********************* */
//1. Premitives  (7 types) 
//    i.number===>2 to the power 53
//    ii.bigInt 
//   iii.string==> "" 
//    iv.boolean ==> true or false
//     v.null ==> standalone value represntation of null not indefind but empty value
//    vi.undefind ==> when value is not defind to a variable
//   vii.symbol ==> To findout uniqueness in value 

  //let a=10; // number
//let b="Brahma" //string
//let isAvailable = true //boolean
//let c= null // null
//let d; //undefind
//let id = Symbol('123');
//let anotherId = Symbol('123')  // though both id and anotherId are having same values but they are diffrent
//console.log(id==anotherId);
//let bigInt = 1234323n

// console.log(typeof a);
// console.log(typeof null);
// console.log(typeof isAvailable);
// console.log(typeof undefined);

//2. Refrence type(Non premitives)
/******************* */
// Memory address Reference of variable is given

// i.  Object

let myObj = 
{
    name:"Brahma",
    id:"1",
    addr:"BBSR"
}

console.log(typeof myObj);


// ii. Array

let myArr = ["Shaktiman", "Xero"];
console.log(typeof myArr);
// iii.Functions

let myFun = function(){
    return (2+2)
}
//console.log(myFun());
console.log(typeof myFun);
//++++++++++++++++++++++++++++++++++++++++++++++

// 1. Stack memory (Premitive memory) copy of vaiable
let myName = "Brahmananda";
let anotherName = myName;  //here the copy of myName is created in stack
anotherName = "Dipun"; // The value of myName will not be changed as copy created 
// console.log(anotherName); // OP "Dipun"
// console.log(myName);  // OP "Brahmananda"



// 2. Heap memory (Non Premitive memory) reference of original value

let userOne = {
  email:"Brahma@gmail.com",
  Upi:"xyz@ybl"
}

let userTwo = userOne;   // now we have assigned userOne to userTwo here both varibales 
//are refrence to same memory location as a heap
userTwo.email="Dipun@gmail.com"; //Now when we change the value of email by userTwo then the
// value will be changed both the varibales because both are refrence to same memory location
console.log(userOne.email); //output ===="Dipun@gmail.com"



