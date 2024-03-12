
const userEmail="rr@gmail.com" /*[] , (),{} etc truthy value  see below list that are considered truthy value*/ 
if (userEmail){
    // console.log("Got user Email");
}else {
    // console.log("Don't have user Email");
}


//falsy value
// false,0,-0,BIgInt,0n,"",null,undefined,NAN

//truthy value
//"0",true,'false'," " ,[],{},function(){}

if (userEmail.length==0){
    // console.log("Array is Empty");
}

const emptyObject ={}
if(Object.keys(emptyObject).length==0){ /* object ko  key check gareko ho yeha ani at the end  key ko array banera aauxa ani compare garna easy hunxa*/
    // console.log("Object is Empty");
} 

//  true  hunxa  down ko  condition ko output
// false==0
// false == ''
// 0==''

//  Nullish coalescing Operator (??):null undefined

let val1;
// val1= 5 ?? 10
// val1 = null ?? 10 // any reason value null return vayo vane (10 yeha ko sato ) safe landing function lagainxa so situation can be  under control 
// val1 = undefined ?? 10
// val1 = null ?? 10 ??20 // first value return hunxa   here 10 
// console.log(val1);


// Terniary Operator 


//condition ? true : false
 const iceTeaPreice=100
 iceTeaPreice <=80?  console.log("less than 80") :  console.log("more than 80")