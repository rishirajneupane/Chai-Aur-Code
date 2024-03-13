//    for of

// ["" ,"" ,""]    string in array
// [{},{} ,{}]    object in array


const arr = [1,2,3,4,5]
//yeha object  ma afule j object rakhe ni hunxa  like aile arr xa
for (const num of arr){
    // console.log(num);
}

const greeting ="hello world !" // yo string   ho yesma for of lagauna thaleko
for (const greet of greeting){
    // console.log(`Each char is ${greet}`); //print  each string  with space
}



//Map 
 const map = new Map()
 map.set('IN',"India")
 map.set('PK',"Pakistan")
 map.set('PNPK',"Nepal")
 map.set('UK',"United Kingdom")
//  console.log(map);



 for (const [key, value] of map) //[key, value] :> Destructure of array  gareko 
 {
    // console.log(key, ':>', value);
 }


 //object ko lagi :  yeha kaam gardaina Map

 const myObject={
    'game1':'NFS',
    'game2':'Spiderman'
 }
// for (const [key, value] of myObject)
 {
    // console.log(key,':>',value);
}

//object ma yesari use garne  // for in //use gareara
const myNewObject = {
    cpp:"c++",
    js:"javascript",
    py:"python"
}
 for (const key in myNewObject) {
    // console.log(`${key} is the shortcut  of ${myNewObject[key]}`);
 }


 const programming= ["js","rb", "py","cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}



// const map = new Map()
 map.set('IN',"India")
 map.set('PK',"Pakistan")
 map.set('PNPK',"Nepal")
 map.set('UK',"United Kingdom")

 for (const key in map) {
    // console.log(key); //  map iterable hudaina so yo kaam gardaina
 }





//  const coding= ["js","rb", "py","cpp"]
//  coding.forEach ( function(val) /* call back function vayera yesko name hudaina so remove name */
//  {
    //function array  ko vitra  xa so   yeha value le afai parameter   ko jasari value lyauxa 
    // console.log(val); // val ko satta item  ya j lekhda ni hunxa as our wish 
// })


// coding.forEach( (item) => {
    // console.log(item);
// })
 


const coding= ["js","rb", "py","cpp"]
// function printMe(item){
    // console.log(item);
// }
// coding.forEach(printMe)

coding.forEach( (item ,index,arr) => {
    // console.log(item ,index ,arr);
})


const myCoding=[ //array ko vitra vako object  ma for each lagako 
     {
    LanguageName:"javascript",
    LanguageFileName:"js"
},
     {
    LanguageName:"javascript",
    LanguageFileName:"js"
},
     {
    LanguageName:"Java",
    LanguageFileName:"java"
},
     {
    LanguageName:"Python",
    LanguageFileName:"py"
}
]
myCoding.forEach( (item) => {
    console.log(item.LanguageFileName);
})