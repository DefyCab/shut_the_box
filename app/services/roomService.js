export function createRoomService(api) {
  return {
    getRoom: async (id) => {
      return await api.getRoom(id);
    },
  };
}
