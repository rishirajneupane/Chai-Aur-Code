

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i <=10; i++) 
{
    const element = i ;
    if (element==5){
        // console.log("Five is the Best number");
    }
    // console.log(element);
    
}


for(i=0;i <= 10; i++){
    const element=i ;
    // console.log(`outer loop value is :${i}`);
    for(j=0;j<=10;j++){
        const element=j;
        // console.log(`Inner loop value is :${j} and outer loop value is :${i}`);
    }
}

for(i=1;i <= 10; i++){
    const element=i ;
    // console.log(` It is Table of ${i} `);
    for(j=1;j<=10;j++){
        const element=j;
        // console.log( i + '*' + j + '=' + i*j );
    }
}


let myArray=["Flash","Batman","superman"]
// console.log(myArray.length); //find length of array and it start from 0
for (let index = 0; index < myArray.length; index++) //<=yo  index ma ++ nahune ho vane flash  print vako vai hunxa ...memory navariunjel...infinite
{
    const element = myArray[index];
    // console.log(element);
    
}


for (let index=1;index<=20;index++){
    if(index==5){
// console.log(`5 is Detected`);
// break
continue 
    }// ek patak laai hit gareko  maff gardiyo ra tyo  iteration  skip hunxa next bata continue hunxa
// console.log(`value of i is :${index}`);
}



//while Loop 

let index=0
while(index <= 10){
// console.log(`Value of index is ${index}`);
index=index+2
}


let newArray =["Flash","Superman","spideman"]
let arr = 0
while (arr <=newArray.length){
    // console.log(`value  is ${newArray [arr]}`); /* newarray ko [arr] vanne index ko value matra print garne*/ 
    arr = arr+1
}


//do while loop  

let score = 11 //check nagarera 11 preint gaedinxa ani condition chk huunxa
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10 );

