export function createGameService(api) {
  return {
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
