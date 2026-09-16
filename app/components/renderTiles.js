export function renderTiles() {
  const numberBoard = document.querySelector(".number-board");
  for (let i = 1; i <= 9; i++) {
    const numbers = document.createElement("button");
    numbers.classList.add("number");
    numbers.innerText = i;
    numbers.id = `${i}`;
    numberBoard.appendChild(numbers);
  }
}
