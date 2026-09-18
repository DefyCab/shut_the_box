export function createRoomService(api) {
  return {
    getRoom: async (id) => {
      return await api.getRoom(id);
    },

    creteRoom: async (name, maxPlayers) => {
      debugger
      return await api.createRoom(name, maxPlayers);
    },
  };
}
