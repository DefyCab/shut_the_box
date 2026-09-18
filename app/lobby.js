import * as api from "../db/db.js";
import { createRoomService } from "../app/services/roomService.js";

const roomService = createRoomService(api);

const gameCode = "P36YDK";
const roomCode = "Z666G3";

async function updateRoom() {
  const room = await roomService.getRoom(`${roomCode}`);
  return room;
}

// const room = await roomService.getRoom(`${roomCode}`);

const createRoomBtn = document.querySelector("#create-room-btn");
console.log(createRoomBtn);
createRoomBtn.addEventListener("click", createRoom);

async function createRoom() {
  const create = await roomService.creteRoom("defys nya nya singelrum", 1);
  return create;
}

async function createGameLobby() {
  const room = await updateRoom();

  const gameRoomNameSpan = document.querySelector("#game-room-name");
  const playerOneSpan = document.querySelector("#player-one");
  const nextPlayerSpan = document.querySelector("#next-player-to-move");

  console.log(room);
  const [{ name }] = room.players;

  const singleGameRoom = {
    room: room.name,
    playerOne: name,
  };

  if (room.players.length < 2) {
    const gameRoomName = document.createElement("p");
    const playerOne = document.createElement("p");

    gameRoomName.innerText = singleGameRoom.room;
    playerOne.innerText = singleGameRoom.playerOne;

    gameRoomNameSpan.appendChild(gameRoomName);
    playerOneSpan.appendChild(playerOne);
  }
}

createGameLobby();

const goToGameButton = document.querySelector("#open-game-btn");
goToGameButton.addEventListener("click", goToGame);

function goToGame() {
  window.location.href = "game.html";
}
