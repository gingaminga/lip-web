import constants from "@/utils/constants";

export const LIP_URL = {
  API: {
    HOST: constants.LIP.API.HOST,
    AUTH: {
      GET_URL: "/api/auth/url",
      REISSUE_TOKEN: "/api/auth/token",
    },
    ROUTINE: {
      ADD_ROUTINE: "/api/routine",
      GET_DETAIL_ROUTINE: "/api/routine",
      GET_ROUTINES: "/api/routine/all",
      MODIFY_ROUTINE: "/api/routine",
      REMOVE_ROUTINE: "/api/routine",
    },
    USER: {
      LOGIN: "/api/user/in",
      LOGOUT: "/api/user/out",
      WITHDRAWAL: "/api/user",
    },
  },
};
