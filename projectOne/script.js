const buttons = document.querySelectorAll('.button')
const body=document.querySelector("body")
//button  :node list  vayera for each lauda hunxa
buttons.forEach(function(button){
console.log(button);
button.addEventListener('click', function(e){
console.log(e);
console.log(e.target);
//e.targrt le kun button ma mouse click vayo vanne dinxa
//aba yeha switch case or if.. loop j lauda ni hunxa further 
if(e.target.id==='grey'){
body.style.backgroundColor=e.target.id //'grey' yo lekhna ni milxa 
}
if(e.target.id==='white'){
body.style.backgroundColor=e.target.id  
}
if(e.target.id==='blue'){
body.style.backgroundColor=e.target.id  
}
if(e.target.id==='yellow'){
body.style.backgroundColor=e.target.id  
}

})
});