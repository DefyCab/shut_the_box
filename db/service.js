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
