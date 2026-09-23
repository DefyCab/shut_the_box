export function createRoomService(api) {
  return {
    getRoom: async (id) => {
      return await api.getRoom(id);
    },

    getRooms: async () => {
      return await api.getRooms();
    },

    createRoom: async (name, maxPlayers) => {
      debugger;
      return await api.createRoom(name, maxPlayers);
    },
  };
}
