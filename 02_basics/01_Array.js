let myArray = [1,2,3,4,5,"Brahma",true]; //combination of diffrent type of primitives 
     // console.log(myArray[0]);                                    //Can be increased in sizes       

// Array can have 2 copies 
//1. Shallow Copy----- refrence to same memory locations
//2. Deep Copy-------- refrences to diffrent memory location

//diffrent way of creating array
let myArr2 = new Array(1,2,3,4,5,'Brahma');
// console.log(myArr2.length);

// ++++++++++++++++++++++++++ARRAY Methods++++++++++++++++++++++++++++++++++

//myArray2.push(6) //  Push ----Adds element to end of array 
//myArray2.pop() //  Pop ----removes element from end of array
//myArray2.unshift(0) // unshift -- add element at the start
//myArray2.shift() // remove 1st element
//myArray2.includes(2)// boolean value true/false
//myArray2.indexOf(3) // give index value
// const newArray3 = myArr2.join()
// console.log(typeof newArray3); // Join operation joins the array element and convert it to string

//slice   and splice++++++++++++++++++++++++++++

//main note---->>>>>>> Slice dont make any change in  main array but Splice makes changes in main Array

const myarrrr = [1,2,3,4,5,6];
const mynarr = myarrrr.slice(1,3);
console.log("A", myarrrr);
const mynarr2 = myarrrr.splice(1,3);
console.log(mynarr);  // dont include last character
console.log(mynarr2); // includes last character
console.log("B",  myarrrr);


