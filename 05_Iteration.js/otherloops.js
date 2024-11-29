//For of loop ====>>>>> Array specific loop


// let arr = [1,2,3,4,5]
//  for (const num of arr) {
//     console.log(num);
    
//  }

//+++++++++++++++++++++++++++++++++++++MAPS+++++++++++++++++++++++++++++++++++++++++++

// map =new Map();  //no duplicate vlaues only uniue values
// map.set('IN','India');
// map.set('FR','France');    map is not itterable
// map.set('US','USA');  // no duplicate value allowed

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, value);
    
// }

//on simple Object literals

const myObj = {
    game1: "NFS",
    game2:"fireplay",
}

// for (const [key, value] of myObj) {   //ForOF loop gives value directly
//     console.log(key,value);
//     }
//++++++++++++++++++++++++++++++++++++++++++++++++
const myObj1 = {
    js:"Javascript",
    rb: "rubby",
    cpp: "C++",
    swift: "Swift",
}

// for (const key in myObj1) {
//    //console.log(key);
//    console.log(`${key} sortcut for ${myObj1[key]}`); // For IN provides keys always both in Array and Object
   
        
//     }

const arr1 =[1,2,3,4,5];
for (const key in arr1) {
    //console.log(arr1[key]);
    
}

//+++++++++++++++++++++=ForEach+++++++++++++++++++++++++++++++++++++++++++++++++++++++

const coding =["js","ruby","Python","CPP"];
//coding.forEach(function(item){console.log(item)});  // for each is for array

//coding.forEach((item)=>{console.log(item)});
// coding.forEach(printme);
// function printme(item){
//     console.log(item)
// }

//coding.forEach((item , index, array)=>(console.log(item , index, array)));

let receivedArray = [
    {language:"JAVA",
        languageFile:"JAVAFile"   
    },
    {language:"JAVA1",
        languageFile:"JAVAFile1" },
    {language:"JAVA2",
        languageFile:"JAVAFile2" }
]

//receivedArray.forEach((item, index, array1)=>{console.log(item.language,index,array1)});
















