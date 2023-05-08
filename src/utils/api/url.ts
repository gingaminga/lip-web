import constants from "@/utils/constants";

export const LIP_URL = {
  API: {
    HOST: constants.LIP.API.HOST,
    AUTH: {
      REISSUE_TOKEN: "/api/auth/token",
    },
    OAUTH: {
      GET_URL: "/api/oauth/url",
    },
    USER: {
      LOGIN: "/api/user/login",
    },
  },
};
