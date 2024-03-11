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


//datatypes are based on memory allocation
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

// JavaScript is a dynamically typed language. This means that you don't need to specify the 
// data type of a variable when you declare it.



//...............************ Stack (Primitive) & Heap (Non-Primitive) *********......



let myYoutubeName="ErRishi"
let anotherName=myYoutubeName
anotherName="erWithRishi"
// console.log(myYoutubeName);
// console.log(anotherName);


let userOne={
email:"rishi@google.com",
upi:"user@ybl"
}

let userTwo=userOne
userTwo.email="Rishi@google.com"
console.log(userTwo);
console.log(userOne);