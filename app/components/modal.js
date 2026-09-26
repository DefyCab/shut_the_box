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

export function modalLobby(text) {
  const gameBoard = document.querySelector(".main-container");
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

export function modalLeave(text, callback) {
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
    callback();
    dialog.close();
  });
}

export function modalEndGame(text, result, callback) {
  const gameBoard = document.querySelector(".game-board");
  const dialog = document.createElement("dialog");
  const divOne = document.createElement("div");
  const divTwo = document.createElement("div");
  const closeButton = document.createElement("button");
  const info = document.createElement("p");
  const points = document.createElement("p");

  dialog.classList.add("dialog");
  closeButton.classList.add("close-button");
  divOne.classList.add("dialog-container");
  divTwo.classList.add("dialog-container");

  info.innerText = `${text}`;
  points.innerText = `Din poäng blev: ${result}`;
  closeButton.innerText = "x";

  gameBoard.appendChild(dialog);
  dialog.appendChild(divOne);
  divOne.append(text, points);
  dialog.appendChild(divTwo);
  divTwo.appendChild(closeButton);

  dialog.open = true;
  closeButton.addEventListener("click", () => {
    callback();
    dialog.close();
  });
}
