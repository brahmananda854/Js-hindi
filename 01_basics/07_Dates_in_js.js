let myDate = new Date();
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
console.log(typeof myDate);
let Date2 = new Date(2023,0,23);
let Date3 = new Date(2023,0,23,5,4);
//console.log(Date3.toLocaleDateString());
// let Date4 = new Date("2024-01-20");
// console.log(Date4.toLocaleDateString());
// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Date2.getTime());

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getHours()); //etc etc....
console.log(newDate.toLocaleDateString('default',{
    weekday:'long',
    //timeZone:'',
}));




