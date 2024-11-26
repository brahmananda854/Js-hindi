let score = "33abc";
console.log(typeof score);

let convertNumber = Number(score);
console.log(typeof convertNumber);
console.log(convertNumber); // NaN

//Notes:-
//1. Converting a string where "33" is present can be converted to number 33 
//2. Converting a string where "Brahma" present will show as NaN
//3. Converting null to number results 0
//4. Converting undefind to number results NaN
//5. Converting a string where "33abc" is present can be converted to number with NaN 
//Converting boolen value will show "true" to 1 and "False" 0
//NaN is not a number but still its showing as Number in JS

let usLoggedIn= 1;
let convertBoolean = Boolean(usLoggedIn);
console.log(convertBoolean);
// Boolean "1" to true
// "0" to false also "" false
