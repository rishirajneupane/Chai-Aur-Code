var c=15
let a=300 //global scope
if(true){

let a=10 //block scope
const b=15
// console.log("INNER:",a);
// var c=25 //yo value outside scope pani janxa global for (){local bata}
}

// console.log(a);
// console.log(b);
// console.log(c);



function  one (){
    const username ="Rishi"
    function two(){
        const website="youtube"
   /* // console.log(username);*/}
    // console.log(website); //line by line execution hunxa 
    two() // yo call vayepaxi  {} vitra  gayera username console garxa
}
one() //yo call vayo vane two() pani call hunxa 

if (true){
    const username="Rishi"
    if(username=="Rishi"){
        const website=" Youtube"
        // console.log(username+website);//executes
    } //console.log(website); //eroor 
}//console.log(username);//error



addOne (5) // valid 
function addOne(num){
    return num +1
}
addTwo (5) // addTwo laai const ma hold gareko xa  ani use garnu vanda paile declare garnu parxa 
const addTwo = function (num){
    return num +2
}
