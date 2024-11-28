// There are two types of scopes 
// 1.Global scope
// 2.Local Scope   let and const are block label scope

let a =100;  //Global scope   //var is an exception which can be used any where that creates problem

if (true) {
   let a=10;  // block scope
   console.log(a);  a=10
}

console.log(a); // a=100
// Global scope is diffrent from browser console and Node environment

// Scope understanding in function label

function One(){
    const val1 = 100;
    function Two(){
        const val2 =200;
        console.log(val1);
    }
    //console.log(val2);
    Two();
}

//One();

if (true) {
    let myval = "Brahma"
    if (myval="Brahma") {
        let myval2 = "Champion"
        console.log(myval+myval2);        
    } 
   // console.log(myval2);
    
}
//console.log(myval1);

//+++++++++++++++++INTERESTING++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//concept of HOISTING___+++++++
// console.log(one(5));   // As we are not kept Function in a variable so it will excecute before declaring 
// function one(num){
//     return(num+1);
// }

console.log(Two(3));   //concept of Hoisting    //It will not execute as function is assigned to a variable
let Two = function two(num){  //ReferenceError: Cannot access 'Two' before initialization
    return(num+2);
}

