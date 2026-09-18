export function createRoomService(api) {
  return {
    getRoom: async (id) => {
      return await api.getRoom(id);
    },

    getRooms: async () => {
      return await api.getRooms();
    },

    creteRoom: async (name, maxPlayers) => {
      return await api.createRoom(name, maxPlayers);
    },
  };
}
