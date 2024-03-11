const myArr=[0,1,2,3,4,5]
const myHeros= ["shaktiman" , "nagraj"]
const myArr2 =new Array(1,2,3,4)

// console.log(myArr[1]);



// myArr.push(8)
// myArr.pop()

// myArr .unshift(9) // start ko position ma  value add garxa 
// myArr.shift() // start bata 1  value remove garxa 
// console.log(myArr);



// console.log(myArr.includes(5)); //used  in quiz and compare value in boolean etc 
// console.log(myArr.includes(15));
// console.log(myArr.indexOf(5));

// const newarr=myArr.join() // join garera string type convert  garxa 
// console.log(myArr);
// console.log(newarr);
// console.log(typeof newarr);


//+++++++++ Slice==>>     suru ko laai include garxa  last ko index  value laai include gardaina  
//....++++ Splics==>      le original array ma nai change gardinxa ,manipulate garxa 

// console.log("A" ,myArr);

const myN1= myArr.slice(1,3)

// console.log(myN1);
// console.log("B" ,myArr);


const myN2= myArr.splice(1,3) //original value manipulate garxa  ani  diyeko index include garera  return garxa
// console.log(myN2);
// console.log("C", myArr);



  // +++++++++++++++++++++++     Array Prt Two   ++++++++++++++++++++

  const marvel_heros = ["Thor","IronMan","SpiderMan" ]
  const dc_heros= ["SuperMan","Flash","Batman"]

//   marvel_heros.push(dc_heros)
//   console.log(marvel_heros);
//   console.log(marvel_heros[3][1]);


  const all_heros= marvel_heros.concat(dc_heros) //data new variable ma return garxa  concat le
// console.log(all_heros);



//+++++++++++++    splash   eg like glass break .....spread like that 

const all_new_heros=[...marvel_heros,...dc_heros]
// console.log(all_new_heros);



const another_array=[1,2,5,[7,9,0,4],[4,5,[2,1],9]]
const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array);


// console.log(Array.isArray("Rishi"));
// console.log(Array.from("Rishi"));//convert in array  ..used in scraping
// console.log(Array.from({name:"Rishi"}));//return empty array[], we should define kasko array banaune keys ko ki value ko 



let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)); 











