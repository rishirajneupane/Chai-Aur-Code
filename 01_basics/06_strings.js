let name = "Rishi "
let repoCount=50


// console.log(name + repoCount+ " value");  //outdated way 

// console.log(`Hello my name is ${name.toUpperCase()} My repoCount is ${repoCount}`);
 
// console.log(`Hello my name is ${name} My ropoCount is ${repoCount}`); 
//modern way kld string Interpolation


const gameName=new String (`Rishi_Raj_Neupane`)
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));

// const newString= gameName.substring(0,4) //cannot give -ve value
// console.log(newString);

// const anotherString = gameName.slice( -3, 2);//can give -ve value
// const anotherString = gameName.slice(  2);//can give -ve value
// console.log(anotherString);

const newStringOne= "  Rishi  "
// console.log(newStringOne);
// console.log(newStringOne.trim());//used to remove extra space  like in form etc 

const url="https://www.rishi.com%24Neupane"
console.log(url.replace('%24','_'))
console.log(url.includes('rishi'))
console.log(gameName.split('_'));




