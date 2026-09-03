

const dice = [["center"],["top-left", "bottom-right"]]

const dieToShow = document.querySelector(".dice-area")

const dieBox = document.createElement("div");
// const dieOne = document.createElement("span");
const dieTwo1 = document.createElement("span");
const dieTwo2 = document.createElement("span");

dieTwo1.classList.add("pip", "top-left");
dieTwo2.classList.add("pip", "bottom-right");
dieBox.classList.add("die");
dieBox.appendChild(dieTwo1);
dieBox.appendChild(dieTwo2);
dieToShow.appendChild(dieBox);
