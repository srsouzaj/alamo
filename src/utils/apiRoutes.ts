const apiRoutes = {
  procedures: {
    url: () => "/",
    byId: { url: (id: string) => `/${id}` },
  },
};

export default apiRoutes;
