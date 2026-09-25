export function createUserService(api) {
  return {
    getUser: async () => {
      return await api.getUser();
    },
  };
}
