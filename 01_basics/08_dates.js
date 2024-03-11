let myDate= new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);//date  type is object

// let myCreatedDate=new Date(2024 ,3, 9,5,6);//month count from zero here
// let myCreatedDate=new Date("2023-01-24"); // month count here from 1 due to 01 (two number , two digit )
// console.log(myCreatedDate.toDateString())

let myCreatedDate=new Date("01-24-2023");
// console.log(myCreatedDate.toLocaleString())


let myTimeStamp= Date.now;
// console.log(myTimeStamp());
// console.log(myCreatedDate.getTime());
// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));


// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time is `
//ctrl +space key for more propety  of below  line 

// let newDate = new Date()
// currentDayOfWeek=newDate.toLocaleString ('default',{
//     weekday:"long"
// })
// console.log('Today is', currentDayOfWeek);

let newDate = new Date();
console.log(newDate); // Check if the Date object is created correctly

let currentDayOfWeek = newDate.toLocaleString('default', { weekday: "long" });
console.log(currentDayOfWeek); // Check if the toLocaleString() method returns the correct value





