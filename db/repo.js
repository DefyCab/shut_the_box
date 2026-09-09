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

const gameRoom = {
  roomName: room.name,
  id: room.id,
  name: room.members[0].name,
  
};

console.log(gameRoom);
console.log(room);
