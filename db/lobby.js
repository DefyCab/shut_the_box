import room from "../mock/room.js"
import state from "../mock/state.js"

// import * as api from "./db.js";
// import { createGameService } from "./service.js";

// const gameService = createGameService(api);

// const room = await gameService.getRoom("LRJJPP");
// const state = await gameService.getCurrentState("5BN8EB");

console.log(room);
console.log(state);

function createGameLobby() {
  const gameRoomNameSpan = document.querySelector("#game-room-name");
  const playerOneSpan = document.querySelector("#player-one");
  const nextPlayerSpan = document.querySelector("#next-player-to-move");

  const [{ name }] = room.members;

  const gameRoom = {
    room: room.name,
    playerOne: name,
    nextPlayer: state.currentPlayerName,
  };

  const gameRoomName = document.createElement("p");
  const playerOne = document.createElement("p");
  const nextPlayer = document.createElement("p");

  gameRoomName.innerText = gameRoom.room;
  playerOne.innerText = gameRoom.playerOne;
  nextPlayer.innerText = gameRoom.nextPlayer;

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
