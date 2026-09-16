export function modal(text) {
  const gameBoard = document.querySelector(".game-board");
  const dialog = document.createElement("dialog");
  const divOne = document.createElement("div");
  const divTwo = document.createElement("div");
  const closeButton = document.createElement("button");
  const p = document.createElement("p");

  dialog.classList.add("dialog");
  closeButton.classList.add("close-button");
  divOne.classList.add("dialog-container");
  divTwo.classList.add("dialog-container");

  p.innerText = `${text}`;
  closeButton.innerText = "x";

  gameBoard.appendChild(dialog);
  dialog.appendChild(divOne);
  divOne.appendChild(p);
  dialog.appendChild(divTwo);
  divTwo.appendChild(closeButton);

  dialog.open = true;
  closeButton.addEventListener("click", () => {
    dialog.close();
  });
}
