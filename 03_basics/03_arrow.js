let myObj = {
    userName :"Brahma",
    price:'200$',
    Wecomegift: function (){
        //console.log(`Hi ${this.userName} Welcome to out channel and ${this.price} your price`)
    } // This talks about cuurent context of the Object
}
myObj.Wecomegift();
// console.log(this);  //it provides empty value as its running on Node but on browser it will give vlaues

// function suger(){
// let userName = "Brahma";
//     console.log(this.userName);
// }
// suger();  // lots of values are coming 

//************************ */
// Arrow functions
//***********************
// const suger = () =>{
//     let userName = "Brahma";     //same as above
//     console.log(this);    // {}
//     console.log(this.userName);  //undefined
//     }
// suger();

const addTwo =(num1,num2)=>{
    return (num1+num2);
}

console.log(addTwo(4,5));

const addTwo2 =(num1,num2)=>(num1+num2); // implicit return {} have to right return keyword () no need to right return
const addTwo3 =(num1,num2)=>({username:"Dipun"});
console.log(addTwo3());