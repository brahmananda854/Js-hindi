function myName(){
    console.log("B")
    console.log("R")
    console.log("A")
    console.log("H")
    
}
//myName// refrence to function
myName() //() Execute function


// function addTwoNumbers(num1,num2){    //function definition with parameters
//     console.log(num1+num2);
// }

//addTwoNumbers(2,3);  //Excecute with arguments

function addTwoNumbers(num1,num2){    //function definition with parameters
//    let result =num1+num2; 
//     return(result);  //After return statement function will not execute any line of code
    return num1 + num2;
}
const result = addTwoNumbers(2,3);   // return always used when we want to store the result in a variable for later use
// console.log("Result :" , result);

function loginUserMessage(userName="Sam"){   //Default value if nothing is passed  then 
    //if (userName===undefined)
    if (!userName){
        console.log("Please enter User Name");
        
        return
    }
    return (`${userName} has just logged in !!!`)
}
console.log(loginUserMessage());

//++++++++++++++++++++++++++++REST OPERATOR+++++++++++++++++++++++++++++++++++++++++++++++++++
function CalculatecartPrice(val1,val2, ...num1){    //returns Array
    return num1
}

//console.log(CalculatecartPrice(200,300,400,500));  // [400,500]

myObj={
    username:"Brahma",
    age:20,
    
}

function workOnObj(object1){
    console.log(`Hi my username is ${object1.username} and age is ${object1.age}`)
}
// workOnObj({
//     username:"Brahma",
//     age:20,
    
// })
//workOnObj(myObj); //you can pass directly object into function arguments

let myNarray =[100,200,300,400,500];

function workOnObj(array1){
    console.log(array1[2])
}
//workOnObj([100,200,300,400,500])
//workOnObj(myNarray);



