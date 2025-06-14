const apiRoutes = {
  Routines: {
    url: () => "/",
    byId: { url: (id: string) => `/${id}` },
  },
};

export default apiRoutes;
