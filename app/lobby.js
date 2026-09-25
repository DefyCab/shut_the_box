import { form } from "./components/form.js";
import { modalCreateRoom } from "./components/modalCreateRoom.js";

import * as api from "../db/db.js";
import { createRoomService } from "./services/roomService.js";
import { createUserService } from "./services/userService.js";

const roomService = createRoomService(api);
const userService = createUserService(api);

const user = await userService.getUser();
console.log(user);

let counter = 0;
async function getAllSinglePlayerRooms() {
  console.log(counter);
  if (counter % 2 === 0) {
    const singlePlayerRooms = await roomService.getSinglePlayerRooms();
    counter = counter + 1;
    return singlePlayerRooms;
  } else {
    window.location.href = "lobby.html";
  }
}

const createSingleRoomBtn = document.querySelector("#create-single-room-btn");
createSingleRoomBtn.addEventListener("click", createSingleRoom);

async function createSingleRoom() {
  const roomInfo = {
    name: "Singelspel",
    numberOfPlayers: 1,
  };

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

  modalCreateRoom(info, () => {
    window.location.href = "lobby.html";
  });

  return create;
}

// async function createRoom() {
//   const roomInfo = await form();

//   const create = await roomService.createRoom(
//     roomInfo.name,
//     roomInfo.numberOfPlayers,
//   );

//   const { room, state } = create;

//   const info = {
//     name: room.name,
//     player: room.players[0].name,
//     roomCode: state.roomCode,
//   };

//   modalCreateRoom(info);

//   return create;
// }

const showSinglePlayerRoomsBtn = document.getElementById(
  "show-singleplayer-rooms-btn",
);
showSinglePlayerRoomsBtn.addEventListener("click", createGameLobby);

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
