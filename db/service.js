export function createGameService(api) {
  return {
    getRoom: async (id) => {
      return await api.getRoom(id);
    },

    getCurrentState: async (id) => {
      return await api.getCurrentState(id);
    },

    rollDice: async (id) => {
      return await api.rollDice(id);
    },

    submitMove: async (id, move) => {
      return await api.submitMove(id, move);
    },
  };
}
