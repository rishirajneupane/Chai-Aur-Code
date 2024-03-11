/* dataType are categorized based on how  data is stored  in memory and access data from memory
category 
1. primitive : call by value

 2.non primitive :call by reference  */

//  Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

const score= 100
const scoreValue=100.3


const isLoggedIn=false

const outsideTemp=null

let userEmail;


const  id =Symbol('123')
const anotherId=Symbol('123')

// console.log(id==anotherId);


// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// Read type of operator , imp for interview

const heros=["shaktiman","nagraj","rajeshDai"];

let myObj= {
name:"Rishi",
age:24,
}


const myFunction = function()
{console.log("Hello World ");

}

