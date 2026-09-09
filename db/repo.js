export function createGameService(api) {
  return {
    getRoom: async (id) => {
      return await api.getRoomById(id);
    },

    getCurrentState: async (gameId) => {
      return await api.getCurrentGameState(gameId);
    },
  };
}

// export function createRoom(id) {
//   return {
//     async getRoom() {
//       return await getRoom(id);
//     },
//   };
// }

// const roomRepo = createRoom("LRJJPP");

// const room = await roomRepo.getRoom();

// const [{ name }] = room.members;

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

// class gameRoom {
//   constructor(id, roomName, name) {
//     this.id = id;
//     this.roomName = roomName;
//     this.name = name;
//   }
// }

// const gameRoomOne = new gameRoom(room.name, room.id, name);

// console.log(gameRoomOne);
