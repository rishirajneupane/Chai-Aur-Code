

const user = {
    username:"Rishi",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username},Welcome to website`);/* this. le  current context refer garxa scope vitra*/
console.log(this);
    }
};
// user.welcomeMessage() // yesle function call garxa
// user.username="sam" //this will also print , it is present context now 
// user.welcomeMessage()

// console.log(this); //browser ma global object window hunxa yeha {} xa this ko lagi

// function chai (){
//     console.log(this);
//     let username="rishi",
//     console.log(this.username); //object ma matra kaam garekoxa , function ma use garna mileko xaina 
// }
// // chai()

 const chai = function() {
     
      let username="rishi"
    //   console.log(this.username); //result undefined
    }
    // chai()



    
    
    // const chai = ()=> /*function laai hatayera ()ko right ma => add gardiye arrow fn vayo */ {
     
        // let username="rishi"
        // console.log(this.username);} //arrow function ma .this use garna milxa
    
   
    // chai()

    //  const addTwo=(num1,num2)=>{
        // return num1+num2 }
        // console.log(addTwo(4,8));



    //  const addTwo=(num1,num2)=> num1+num2  //implicit return
    //  console.log(addTwo(4,8));



    // const addTwo=(num1,num2)=> (num1+num2 ) //{} use gare return lekhnu parxa () use gare return lekhna  pardaina 
    //  console.log(addTwo(4,8));



    const addTwo=(num1,num2)=> ({username:"rishi"} )   //object return garnu  () ma wrap garnu prxa
     console.log(addTwo(4,8));
