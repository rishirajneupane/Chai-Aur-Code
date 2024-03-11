// declare object in 2 ways 
// literal  ra

// constrctor+++++++>>  bata obj banaye tyo singleton banxa 
// eg .Object.create  // 


// Object literals 

const mySym = Symbol("key1")

const jsUser={
    name:"Rishi",
    "Full Name":"Rishi Raj",
    age:24,
   [mySym]:"Mykey1",
    //[key] yo[] use garna parxa  object laai symbol   ko rupma pass garda  nartra string return garxa  yeha eg ko le ... 
    location: "ktm",
    email:"rrn@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays:["Monday","Saturday"]
}
// console.log(jsUser.email);                 //not recomended always 
// console.log(jsUser["email"]);
// console.log(jsUser["Full Name"]);             //can  be used  mostly(recomended)
// console.log(jsUser[mySym]); //symbol lai print garna laai ni [] use garna  parxa

jsUser.email="rishi@google.com"
// Object.freeze(jsUser) //freeze gardiyo jsuser ko value laai so yespaxi change vayena but  error ni dekhinna
jsUser.email= "errrn@gmail.com"
// console.log(jsUser);


jsUser.greeting = function(){
    // console.log("Hello JsUser!");
}
jsUser.greetingTwo = function(){
    // console.log(`Hello JsUser, ${ this.name}`); //afailaai reference garna $ use gareko , ani this le yeha js user sanga kk property xa tyo thaha pauna  use hunxa 
}
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());



//************* MOre on object ************ */

// const tinderUser = new Object() // singleton object


const tinderUser  = {} // non singleton object
tinderUser.id ="abc123"
tinderUser.name = "Rishi"
tinderUser.isLoggedIn =false

// console.log(tinderUser);


const regularUser= {
    email:"rishiraj@np.com",
    fullname : {
        firstName:"Rishi",
        lastName:"Neupane"
    }

}
// console.log(regularUser.fullname.firstName); //. sign lagayera nested vako element access garna sakinxa 

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2}
// const obj3= Object.assign ({}, obj1 ,obj2) //{}is optional but it guarenteed that all value return will be in target {} other act like source 



const obj3 ={...obj1,...obj2} // recommended  way
// console.log(obj3);


const users = [
    {
        id:1,
        email:"rrn@us.com"
    },
    {
        id:2,
        email:"rrbn@us.com"
    },
    {
        id:3,
        email:"rrfn@us.com"
    },
    {
        id:4,
        email:"rrqn@us.com"
    },
]

users[1].email// can use  .  here
// console.log(tinderUser);
// console.log(Object.keys (tinderUser));
// console.log(Object.values (tinderUser)); // return type array  hunxa so future ma use garna sakinxa  like in  loop , database etc 
// console.log(Object.entries (tinderUser)); //all laai array [] ma convert garxa  with first value key and second is value


// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //pailei property check garna use hunxa  use garnu vanda pailei



//destructure 

const course={
    courseName:"WebDEv",
    price:999,
    courseInstructor:"hitesh"
}
// console.log(course.courseInstructor); //It is okay  to use 


// const{courseInstructor}=course
// console.log(courseInstructor);


const{courseInstructor:instructor}=course //sajilo call ko  lagi instructor lekheko long word vanda

console.log(instructor);

//   json ...name diyeko hudaina 

{"name":"Rishi"
"id":"1812222222"
"email":"rrn@gmail.com"

}  //yesma key  pani " vitra" lekhinxa
























  
