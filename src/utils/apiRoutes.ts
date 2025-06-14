const apiRoutes = {
  Routines: {
    url: () => "/routines",
    byId: { url: (id: string) => `routines/${id}` },
  },
};

export default apiRoutes;
