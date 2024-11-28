//Immediatety invoke function expression) (IIFE)

//Some times we want to excecute our function ASAP it called because may be global variables inherited to block scope
// or need to call from DATABASE ASAP function calls so we need to use IIFE

//EX

(function Chai(){     //Named IIFE
    console.log('DB Connected !!!')
})() ;  //() Defination and () execution

((name)=>(console.log('DB Connected 2 !!!' , name )))('Brahma')  //UnNamed IIFE