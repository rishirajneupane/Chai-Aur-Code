// const coding =["java", "pytjon","c++", "golang"]
// coding.forEach( (item) => {
//     console.log(item);
// })

//  const coding =["java", "pytjon","c++", "golang"] //if yeslai variable ma store garyo vane 
//  const value = coding.forEach( (item) => {
    // console.log(item);
    // return item
// })
// console.log(value); //for each le koi pani value return gardaina 



const myNumber=[1,2,3,4,5,6,7,8,9,10] //value return garxa
// const newNum= myNumber.filter((num) => num>4)
// const newNum= myNumber.filter((num) => { //scope use gareko vayera yeha return lekhnai parxa  mathi() le afai return garthiyo 
//   return  num>4
// })
    // console.log(newNum);




    // for for each 

    // const neoNum=[]
    // myNumber.forEach((num)=>{
    //     if (num>4) {
    //         neoNum.push(num)
    //     }
    // })
    // console.log(neoNum);

    const books = [
        { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
        { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
        { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
        { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
        { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
        { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
        { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
        { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
        { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
      ];

    //   let neoBooks=books.filter( (bk) => bk.publish <= 2000)
      let neoBooks=books.filter( (bk) =>{ //const lekhna mildaina  so let lekhne 
        //  return bk.genre == 'History' && bk.publish <2000
        }) //scope {}use garyo vane return use garnu parxa
    //   console.log(neoBooks);

      const myNamber = [1,2,3,4,5,6,7,8,9,10]
    //    let numMapKo= myNamber.map((nummy) => nummy+10)//() yo vitra j name dina ni milxa  yesle array ko access pako xa so j data chaiye pani yo ma vako name.tyo lekhda hunxa
       let numMapKo= myNamber.map((nummy) =>{ return nummy+10}) //{} use gare return  lekhnu parxa
    //    console.log(numMapKo);


const chainNam =myNamber.map(( nammy) => nammy*10)
                        .map ((nammy ) => nammy+1)   //.  lekhera  jati pani chain  garna milxa ..ra yesma purano .map  ma calculate vaisakeko avalue pass hunxa     
                         .filter((nammy) => nammy>=40)  // . lekhera add gareko  aru pani 
// console.log(chainNam);

 // using function 
// const mainum = [1,2,3] // used in add sum in shopping cart ....
// const myTotal = mainum.reduce( function( acc,currval){
// console.log(`acc : ${acc} and currval :${currval}` );
// return acc+currval

// },0  //used to initialize value to accumilator in initial state 
// )
//  console.log(myTotal);



 //using arrow function 
//  const mainum = [1,2,3]
//  const myTotal= mainum.reduce((acc,cur )=> acc+cur,0) //() paxi comma ra zero add gareko  yeha {},0 ni milxa but return  use garnu parxa
//  console.log(myTotal);

let shoppingCart = [
    { course:"python",
    price:999

},
    { course:"java",
    price:919

},
    { course:"c++",
    price:655

},
    { course:"c",
    price:785

},
    { course:"ruby",
    price:874

},
]

const priceToPay =shoppingCart.reduce((acc , item)=> acc+item.price ,0) //item le mathi ko sabai object access garxa . use garera specific value access gareko 

console.log(priceToPay);


