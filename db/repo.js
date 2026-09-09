import { getRoom } from "./db.js";

export function createRoomRepo(id) {
  return {
    async getRoom() {
      return await getRoom(id);
    },
  };
}

const roomRepo = createRoomRepo("LRJJPP");

const room = await roomRepo.getRoom();

// desctructing objects
const [{ name }] = room.members;

// const gameRoom = {
//   roomName: room.name,
//   id: room.id,
//   name: name,
// };

// console.log(gameRoom);
// console.log(room);

// function gameRoom(id, roomName, name) {
//   this.id = name;
//   this.roomName = roomName;
//   this.name = name;
// }

class gameRoom {
  constructor(id, roomName, name) {
    this.id = id;
    this.roomName = roomName;
    this.name = name;
  }
}

const gameRoomOne = new gameRoom(room.name, room.id, name);

console.log(gameRoomOne);
