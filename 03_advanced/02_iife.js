 //Immediately Invoked functiion Expression (IIFE)


 function chai (){
    console.log(`DB Connected`);
 }
//  chai()

 (function chai (){
    //named iife
    console.log(`DB Connected`);
 }) 
 ();
 //last ma ; ni lagaunu parxa kina vane iife  execution garxa but  context rokhna 
//   sakdaina so ; yesle rokhna use hunxa
 /*()vitra function  laai defination garne */   //   () / * yesle execution garxa */ 
 

 // yesma ma vayo (defination)  yesma vayo (call)

 // Global scope ko pollution hatauna ko lagi IIFE use hunxa ()
 //local le global  ko access paune vayera pollution hunxa


 /*( () => {
    console.log(`DB Connected`);
}
 ) () */

 ( (name) => {
    //unmaned iife
    console.log(`DB Connected ${name}`);
}
 ) ("Rishi Raj Neupane") /* parameter ()  ani  argument () function jasari dina milxa */


