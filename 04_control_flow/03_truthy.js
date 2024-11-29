const user = "Harish";     //String with value considered as truthy and "" falsy
if (user) {
    console.log("user added !!!!!");
    
}else{
    console.log("User Not found !!!!!");
    }

//falsy value          ------->>> false, 0 ,-0, bigInt 0n, "", null , NaN, undefined
// rest all are truthy ------>>>> "0" , 'false', " ", [], {}, function(){}

// let myArray =[];
// if (myArray.length==0) {
//     console.log("Array Length detected !!!!");
    
// }

// let myObj = {};
// if (Object.keys(myObj).length ==0) {
//     console.log("Object length detected !!!!");
    
// }

//Nullish coaleseing operator(??) : null undefind
// let val;
// val = 5??10
// console.log(val);

// val = null??10
// console.log(val);

// val = undefined??10
// console.log(val);

// val = undefined ?? 10 ?? 15;  //first found value will be assigned to avaoid null or undefined
// console.log(val);
 

// Ternary operator 

//condition ?? true :false;

const IstPrice = 100;
IstPrice>80 ? console.log("greator than 80"): console.log("less than 80");

