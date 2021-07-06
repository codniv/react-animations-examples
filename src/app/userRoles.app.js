export const userType = {
  ADMIN: "ADMIN",
  USER: "user",
};

export const userRoles = {
  [userType.ADMIN]: {
    access: [
      "/",
      "/change-password",
      "/dashboard",
      "/building/*",
      "/sample/*",
      "/demo",
      "/demo-generic",
    ],
  },
  [userType.USER]: {
    access: ["/", "/log-in", "/change-password", "/auth/*"],
  },
};
