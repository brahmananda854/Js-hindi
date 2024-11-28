// const tinder = new Object();  //Singleton
const tinder = {};
tinder.id = "1234";
tinder.name = "Dipun";
tinder.Addr = "BBSR";
//tinder['id'] = "1234";
//console.log(tinder);
//console.log(tinder['id']);

//++++++++++++++Nested object++++++++++++++++++++++++++++

let newObj = {
    userId:1,
    UserName:{
        Fullname:{
            FirstName:"Brahmananda",
            LastName:"Dash",
        }
    }
}

//console.log(newObj.UserName.Fullname.LastName);

let obj1={1:"a", 2:"b"};
let obj2={3:"c", 4:"d"};
//let obj3 = Object.assign({}, obj1,obj2); //combines sources object with target object and returns new object
let obj3 = {...obj1,...obj2}  //spread operators
//console.log(obj3); 

//Important
//++++++++++++++++++
//console.log(newObj);
//console.log(Object.keys(newObj)); //It retuns the array of Keys  [ 'userId', 'UserName' ]
//console.log(Object.keys(tinder));  //[ 'id', 'name', 'Addr' ]
//console.log(Object.values(tinder)); //[ '1234', 'Dipun', 'BBSR' ]
//console.log(Object.entries(tinder)); //[ [ 'id', '1234' ], [ 'name', 'Dipun' ], [ 'Addr', 'BBSR' ] ]
console.log(tinder.hasOwnProperty('isLogged'));  //check if the property is available or not
