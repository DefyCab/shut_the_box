import * as api from "./db.js";
import { createGameService } from "./service.js";

const gameService = createGameService(api);

const room = await gameService.getRoom("LRJJPP");
const state = await gameService.getCurrentState("5BN8EB");

const main = document.querySelector(".main-container");
const gameRoom = document.createElement("div");

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

  gameRoomName.innerHTML = gameRoom.room;
  playerOne.innerHTML = gameRoom.playerOne;
  nextPlayer.innerHTML = gameRoom.nextPlayer;

  gameRoomNameSpan.appendChild(gameRoomName);
  playerOneSpan.appendChild(playerOne);
  nextPlayerSpan.appendChild(nextPlayer);
}

createGameLobby();
