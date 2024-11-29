//For
for (let index = 0; index < 10; index++) {
    const element = index;
    if (element==5) {
       // console.log("5 is best number !!!!!");
        
    }
    //console.log(element);
    
}

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     //console.log(`Outer loop ${i}`);
    
//     for (let j = 1; j <= 10; j++) {
//         const element = j;
//         //console.log(`Inner loop ${j,i}`);
//         console.log(`${i} * ${j} =  ${i * j}`);
        
//     }
// }


let myArray  =["Shaktiman", "Batman", "Superman"]
for (let index = 0; index <= myArray.length-1; index++) {
    const element = myArray[index];
   // console.log(element);
    
}

// break and continue 

// for (let i = 1; i <= 20; i++) {
//    if (i==5) {
//     console.log('detected 5 !');
//     break;
//    }
//     console.log(`value of i ${i}`);
    
    
// }

for (let i = 1; i <= 20; i++) {
    if (i==5) {
     console.log('detected 5 !');
     continue;
    }
     console.log(`value of i ${i}`);
     
     
 }