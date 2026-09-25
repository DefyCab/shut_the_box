// import create from "../mock/create.js";
import { form } from "./components/form.js";
import { modalCreateRoom } from "./components/modalCreateRoom.js";

import * as api from "../db/db.js";
import { createRoomService } from "../app/services/roomService.js";

const roomService = createRoomService(api);

// async function getallRooms() {
//   const rooms = await roomService.getRooms();
//   console.log(rooms);
//   return rooms;
// }

async function getAllSinglePlayerRooms() {
  const singlePlayerRooms = await roomService.getSinglePlayerRooms();

  return singlePlayerRooms;
}

const createRoomBtn = document.querySelector("#create-room-btn");
createRoomBtn.addEventListener("click", createRoom);

async function createRoom() {
  const roomInfo = await form();

  const create = await roomService.createRoom(
    roomInfo.name,
    roomInfo.numberOfPlayers,
  );

  const { room, state } = create;

  const info = {
    name: room.name,
    player: room.players[0].name,
    roomCode: state.roomCode,
  };

  modalCreateRoom(info);

  return create;
}

async function createGameLobby() {
  const rooms = await getAllSinglePlayerRooms();

  const main = document.querySelector(".main-container");

  let id = 1;

  rooms.map((room) => {
    const [{ name }] = room.players;

    const singleGameRoom = {
      room: room.roomName,
      playerOne: name,
    };

    if (room.players.length < 2) {
      const gameRoom = document.createElement("article");
      gameRoom.classList.add("game-room");
      gameRoom.setAttribute("id", `${id}`);

      const gameRoomNameSpan = document.createElement("span");
      gameRoomNameSpan.classList.add("game-room-span");
      gameRoomNameSpan.setAttribute("id", "game-room-name");

      const gameRoomPlayerSpan = document.createElement("span");
      gameRoomPlayerSpan.classList.add("game-room-name");
      gameRoomPlayerSpan.setAttribute("id", "player-one");

      const gameRoomName = document.createElement("p");
      const playerOne = document.createElement("p");

      gameRoomName.innerHTML = `<strong>Rum: </strong> ${singleGameRoom.room}`;
      playerOne.innerHTML = `<strong>Spelare: </strong> ${singleGameRoom.playerOne}`;

      const buttonDiv = document.createElement("div");
      const openGameBtn = document.createElement("button");
      openGameBtn.setAttribute("id", `${id}`);
      openGameBtn.classList.add("open-game");
      openGameBtn.innerText = "Öppna rum";

      main.appendChild(gameRoom);
      gameRoom.append(gameRoomNameSpan);
      gameRoomNameSpan.appendChild(gameRoomName);
      gameRoom.appendChild(gameRoomPlayerSpan);
      gameRoomPlayerSpan.appendChild(playerOne);
      gameRoom.appendChild(buttonDiv);
      buttonDiv.appendChild(openGameBtn);

      id = id + 1;
    }
  });
  const openGamebtns = document.querySelectorAll(".open-game");
  openGamebtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.id);
      const gameCode = rooms[id - 1].gameCode;

      window.location.href = `game.html?gameCode=${gameCode}`;
    });
  });
}

createGameLobby();
