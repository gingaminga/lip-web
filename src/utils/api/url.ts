import constants from "@/utils/constants";

export const LIP_URL = {
  API: {
    HOST: constants.LIP.API.HOST,
    AUTH: {
      GET_URL: "/api/auth/url",
      REISSUE_TOKEN: "/api/auth/token",
    },
    TODO: {
      GET_TODO: "/api/todo",
      REMOVE_ALL_TODO: "/api/todo/all",
      REMOVE_TODO: "/api/todo",
    },
    ROUTINE: {
      ADD_ROUTINE: "/api/routine",
      GET_DETAIL_ROUTINE: "/api/routine",
      GET_ROUTINES: "/api/routine/all",
      MODIFY_ROUTINE: "/api/routine",
      REMOVE_ALL_ROUTINE: "/api/routine/all",
      REMOVE_ROUTINE: "/api/routine",
    },
    USER: {
      CHANGE_NICKNAME: "/api/user/nickname",
      DUPLICATE_NICKNAME: "/api/user/nickname/dup",
      LOGIN: "/api/user/in",
      LOGOUT: "/api/user/out",
      WITHDRAWAL: "/api/user",
    },
  },
};
