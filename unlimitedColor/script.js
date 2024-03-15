//generate a random color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#"; //let lageko kina vane yo change  hunu parne vayera
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]; //0 to 16 random no generate hunxa ani  tyo no ko index  ko aadharma ma hex bata value pick garne
  }
  return color;
};
let intervalId; //global scope variable banako  below clear interval ma use garna lai
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
