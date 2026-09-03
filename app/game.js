const dice = [
  ["center"],
  ["top-left", "bottom-right"],
  ["top-left", "center", "bottom-right"],
  ["top-left", "top-right", "bottom-left", "bottom-right"],
  ["top-left", "top-right","center","bottom-left", "bottom-right"],
  ["top-left", "top-right", "middle-left", "middle-right", "bottom-left", "bottom-right"],
];

const diceArea = document.querySelector(".dice-area");

let diceRollOne = 0;
let diceRollTwo = 0;

function rollDice() {
  diceRollOne = Math.floor(Math.random() * 6);
  diceRollTwo = Math.floor(Math.random() * 6);
}


rollDice()
console.log(diceRollOne)
// console.log(diceRollTwo)


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

const test = document.createElement("div");
for (i = 0; i <= diceRollOne; i++) {
  const cspan = document.createElement("span");
  cspan.classList.add("pip", dice[diceRollOne][i]);
  test.appendChild(cspan);
}
// const test2 = document.createElement("span")
// test2.classList.add("pip",...dice[2])
test.classList.add("die");
// test.appendChild(test2)
diceArea.appendChild(test);

// const testtest = document.createElement("div");
// for (i = 0; i < diceRollTwo; i++) {
//   const cspan = document.createElement("span");
//   cspan.classList.add("pip", dice[diceRollTwo][i]);
//   testtest.appendChild(cspan);
// }
// // const test2 = document.createElement("span")
// // test2.classList.add("pip",...dice[2])
// testtest.classList.add("die");
// // test.appendChild(test2)
// diceArea.appendChild(testtest);