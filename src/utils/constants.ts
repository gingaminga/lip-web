export const NOT_LOGIN_PATH_NAME = ["/login", "/callback/[oauth]"]; // 로그인되지 않아도 접근 가능한 경로

const constants = {
  LIP: {
    API: {
      HOST: process.env.NEXT_PUBLIC_LIP_HOST || "",
    },
    DOMAIN: "lifeisplan.me",
  },
  NODE_ENV: process.env.NODE_ENV,
  PROJECT_NAME: "LifeIsPlan",
};

export default constants;
