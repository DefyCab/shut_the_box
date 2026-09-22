import * as api from "../db/db.js";
import { createRoomService } from "../app/services/roomService.js";
import { modal } from "./components/modal.js";

const roomService = createRoomService(api);

// const roomCode = "Z666G3";

// async function updateRoom() {
//   const room = await roomService.getRoom(`${roomCode}`);
//   return room;
// }

async function getallRooms() {
  const rooms = await roomService.getRooms();
  return rooms;
}

console.log(await getallRooms());
// const room = await roomService.getRoom(`${roomCode}`);

const createRoomBtn = document.querySelector("#create-room-btn");
createRoomBtn.addEventListener("click", createRoom);

async function createRoom() {
  debugger;
  const create = await roomService.createRoom("defys nya nya singelrum", 1);

  const roomCode = create.roomCode;
  modal(`Ett rum med koden ${roomCode} har skapats`);
  return create;
}

async function createGameLobby() {
  const rooms = await getallRooms();

  const main = document.querySelector(".game-board");

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
      // const gameRoomNamePrefix = document.createElement("p");
      // gameRoomNamePrefix.classList.add("category");
      gameRoomNameSpan.classList.add("game-room-span");
      gameRoomNameSpan.setAttribute("id", "game-room-name");

      const gameRoomPlayerSpan = document.createElement("span");
      // const gameRoomPlayerPrefix = document.createElement("p");
      // gameRoomPlayerPrefix.classList.add("category");
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
  console.log(openGamebtns);
  openGamebtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(btn);
      const id = Number(btn.id);
      const gameCode = rooms[id - 1].gameCode;

      window.location.href = `game.html?gameCode=${gameCode}`;
    });
  });

  //TODO: Loop over gameRooms and take id to get gameCode.
  // create button on each article
}

createGameLobby();
