export default {
  serverBaseurl: "http://localhost:2020",
  api: {
    auth: {
      userLogin: "/auth/login",
      validateToken: "/auth/validate-token",
      refreshToken: "/auth/refresh-token",
    },
    project: {
      create: "/project",
      update: "/project/",
      getAll: "/project",
    },
  },
};
