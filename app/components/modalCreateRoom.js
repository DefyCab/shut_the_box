export function modalCreateRoom(info, callback) {
  const main = document.querySelector(".main-container");
  const dialog = document.createElement("dialog");
  const divOne = document.createElement("div");
  const divTwo = document.createElement("div");
  const closeButton = document.createElement("button");
  const boilerPlate = document.createElement("p");
  const name = document.createElement("p");
  const player = document.createElement("p");
  const roomCode = document.createElement("p");

  dialog.classList.add("dialog");
  closeButton.classList.add("close-button");
  divOne.classList.add("dialog-container");
  divTwo.classList.add("dialog-container");

  boilerPlate.innerText = "Du har skapat ett nytt rum!";
  name.innerHTML = `<strong>Room name: </strong> ${info.name}`;
  player.innerHTML = `<strong>Player: </strong> ${info.player}`;
  roomCode.innerHTML = `<strong>RoomCode: </strong> ${info.roomCode}`;

  closeButton.innerText = "x";

  main.appendChild(dialog);
  dialog.appendChild(divOne);
  divOne.append(boilerPlate, name, player, roomCode);
  dialog.appendChild(divTwo);
  divTwo.appendChild(closeButton);

  dialog.open = true;
  closeButton.addEventListener("click", () => {
    callback();
    dialog.close();
  });
}
