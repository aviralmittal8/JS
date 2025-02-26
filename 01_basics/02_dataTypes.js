"use strict"; //treat all  JS code as neer version

// alert(3+3) //this can be used ith boser but not with the node 
// Code readability prefer to be high
console.log(3 + 3); 

//number = 2^53 approx
//bigint use to store scientific value
//string => " "
//Boolean => true.false
// null => standalone value
// symbol =>  to identify unique components 

console.log(typeof null); //object
console.log(typeof undefined); //undefined

// stack( primitive datatypes) and heap (non - primitive )memory :
let myname = "aviralmittal"
let anothername =  myname
anothername = "aviral"
console.log(myname)
console.log(anothername)
