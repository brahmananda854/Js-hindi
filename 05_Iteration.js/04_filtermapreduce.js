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

