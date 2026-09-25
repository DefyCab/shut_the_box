export function createRoomService(api) {
  return {
    getRoom: async (id) => {
      return await api.getRoom(id);
    },

    getRooms: async () => {
      return await api.getRooms();
    },

    getSinglePlayerRooms: async () => {
      const rooms = await api.getRooms();
      const singlePlayerRooms = [];

      rooms.map((room) => {
        if (room.isMultiPlayer === false) {
          singlePlayerRooms.push(room);
        }
      });

      return singlePlayerRooms;
    },

    createRoom: async (name, maxPlayers) => {
      return await api.createRoom(name, maxPlayers);
    },

    leaveRoom: async (id) => {
      return await api.leaveRoom(id);
    },
  };
}
