const dice = [["center"],["top-left", "bottom-right"],["top-left", "center", "bottom-right"] ]

const diceArea = document.querySelector(".dice-area");

function rollDice() {

}

const showDieTwo = () => {
  const dieBox = document.createElement("div");
  const dieTwo1 = document.createElement("span");
  const dieTwo2 = document.createElement("span");
  dieTwo1.classList.add("pip", "top-left");
  dieTwo2.classList.add("pip", "bottom-right");
  dieBox.classList.add("die");
  dieBox.appendChild(dieTwo1);
  dieBox.appendChild(dieTwo2);
  diceArea.appendChild(dieBox);
};

function showDieOne() {
  const dieBox = document.createElement("div");
  const dieOne = document.createElement("span");
  dieOne.classList.add("pip", "center");
  dieBox.classList.add("die");
  dieBox.appendChild(dieOne);
  diceArea.appendChild(dieBox);
}

const test = document.createElement("div")
for(i = 0; i <= 2; i++) {
const cspan = document.createElement("span")
cspan.classList.add("pip", dice[2][i])
test.appendChild(cspan)
}
// const test2 = document.createElement("span")    
// test2.classList.add("pip",...dice[2])
test.classList.add("die")
// test.appendChild(test2)
diceArea.appendChild(test)