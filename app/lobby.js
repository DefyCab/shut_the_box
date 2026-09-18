import * as api from "../db/db.js";
import { createRoomService } from "../app/services/roomService.js";

const roomService = createRoomService(api);

// const gameCode = "";

// const room = await roomService.getRoom(`${gameCode}`);

// console.log(room);

const createRoomBtn = document.querySelector("#create-room-btn");
console.log(createRoomBtn);
createRoomBtn.addEventListener("click", createRoom);

async function createRoom() {
  const create = await roomService.creteRoom("defys nya nya singelrum", 1);
  console.log(create);
  debugger;
}

function createGameLobby() {
  const gameRoomNameSpan = document.querySelector("#game-room-name");
  const playerOneSpan = document.querySelector("#player-one");
  const nextPlayerSpan = document.querySelector("#next-player-to-move");

  // const [{ name }] = room.members;

  // const gameRoom = {
  //   room: room.name,
  //   playerOne: name,
  //   nextPlayer: "none",
  // };

  const gameRoomName = document.createElement("p");
  const playerOne = document.createElement("p");
  const nextPlayer = document.createElement("p");

  // gameRoomName.innerText = gameRoom.room;
  // playerOne.innerText = gameRoom.playerOne;
  // nextPlayer.innerText = gameRoom.nextPlayer;

  gameRoomNameSpan.appendChild(gameRoomName);
  playerOneSpan.appendChild(playerOne);
  nextPlayerSpan.appendChild(nextPlayer);
}

createGameLobby();

const goToGameButton = document.querySelector("#open-game-btn");
goToGameButton.addEventListener("click", goToGame);

function goToGame() {
  window.location.href = "game.html";
}
