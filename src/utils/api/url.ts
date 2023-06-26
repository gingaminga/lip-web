import constants from "@/utils/constants";

export const LIP_URL = {
  API: {
    HOST: constants.LIP.API.HOST,
    AUTH: {
      GET_URL: "/api/auth/url",
      REISSUE_TOKEN: "/api/auth/token",
    },
    ROUTINE: {
      GET_ROUTINES: "/api/routine/all",
    },
    USER: {
      LOGIN: "/api/user/in",
      LOGOUT: "/api/user/out",
      WITHDRAWAL: "/api/user",
    },
  },
};
