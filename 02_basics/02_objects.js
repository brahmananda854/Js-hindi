// OBJECTs can be created in Singlton ,Literals and simple way
//When we declares as literals then its not a singlton 
//If it created with constructor then its a singleton
//Object.create() //constructor Singleton

const jsUser ={
    name:"Brahma",
    "FullName": "Dipun Dash",
    age:18,
    location:"BBSR",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],
    // "Keys":value    
}

//console.log(jsUser.age); can be done by this or below line
//console.log(jsUser["age"]);
//console.log(jsUser.FullName); // cannot access as its a ""
//console.log(jsUser["fullName"]);

// To access a symbol we can declare in object like below example

const mySym = Symbol("myKey1");
//console.log(typeof mySym);


const jsUser1 ={
    name:"Brahma",
    "FullName": "Dipun Dash",
    [mySym]: "myKey",
    age:18,
    location:"BBSR",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],
}
//console.log( typeof jsUser1[mySym]);
//console.log(jsUser1[mySym]);

jsUser1.age =23;

//console.log(jsUser1.age);  //chnage the vlaue
//Object.freeze(jsUser1); // chnages will not propagate

//+++++++++++++++++++++Adding a function to the Object+++++++++++++++++++++++++++++++

// jsUser1.greeting = function(){
//     console.log("Hello Brahma !!!!!");
// }
//console.log(jsUser1.greeting()); refrence of function returned op function[anonimous]
//console.log(jsUser1.greeting());

jsUser1.greeting2 = function(){
    console.log(`Hello Brahma to you ${this.name}`);

}
console.log(jsUser1.greeting2())







