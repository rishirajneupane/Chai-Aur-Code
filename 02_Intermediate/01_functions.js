

//function defination 

function sayMyName(){

console.log("R");
console.log("I");
console.log("S");
console.log("H");
console.log("I");

}

// sayMyName             //refence
// sayMyName()              //execution


//parameter
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
//argument 
// const result= addTwoNumbers(3,5)


function addTwoNumbers(number1,number2){
    // let result = (number1+number2);
    // return result

return number1+number2

    
    // console.log("Rishi"); // yo print hudaina return bata return vaijanxa code execution
}
const result= addTwoNumbers(3,5)
// console.log("Result :",result); //console vaneko just print matra gareko value return garne wa store garne diferent concept ho



function loginUserMessage(username ="sammy") /* yo =="sammy" default ho  but user le input diyema  yo overwrite hunxa*/{
if(!username) /*(username===undefined)*/{             
    console.log("Enter valid Username");
    return
}
    return `${username } just logged in `
}
// console.log(loginUserMessage("Rishi"));
// console.log(loginUserMessage("")); //just logged in  output aauxa
// console.log(loginUserMessage()); //undefined just logged in aauxa 

// function calculateCartPrice(...num1){
function calculateCartPrice( val1, val2, ...num1)/* 1st ra 2nd ko value  val1 val2 ma janxa aru  array ma value return hunxa*/{
     return num1

}
// console.log(calculateCartPrice(200,500,3000,24,888,1546));


const user={
    username:"Rishi",
    price:"121"
}

function handleObject(anyObject){
    // console.log(`Username is ${anyObject.username} & price is ${anyObject.price}`);
}
// handleObject(user)


//passing object 
handleObject(
    {
        username:"Raj",
        price:123

    }
)

//passing array

const myNewArray=[100,20,111100,45,157,100]
const myNewArray2=[100,20,288800,45,157,200]
const myNewArray3=[100,20,33344400,45,157,300]
function returnSecondValue(getArray){
    return (getArray[1])
}
// console.log(returnSecondValue(myNewArray3));
console.log(returnSecondValue([100,22220,111100,45,157,100])); //other way 