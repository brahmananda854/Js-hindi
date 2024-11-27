//String Interpolation

let name = "Brahmananda";
let value = 50;
console.log(`Hi my name is ${name} and my value is ${value}`);

//Another way of declaring the String is by Object

let myname = new String("Brahmananda"); //it will be a Object where key value pair eill be there
// console.log(myname[0]);
// console.log(myname.length);
// console.log(myname.toUpperCase()); //methods 
// console.log(myname.charAt(2));
// console.log(myname.indexOf("r"));
const newName  = myname.substring(0, 4) //negative value not taken
// console.log(newName);
const anewName  = myname.slice(-11, 4)  // it works with negative value

const newStrings1 = "   Dipun Dash   ";
console.log(newStrings1);
console.log(newStrings1.trim()); // works with white space
const url = "https://brahma.com/dipun%20%page";
console.log(url.replace("%20%",''));
//.includes()
//To make string to Array  use SPLIT

let value2 = "Brahma-Dash-Engg";
console.log(value2.split('-'));





