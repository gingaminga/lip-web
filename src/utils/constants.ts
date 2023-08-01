const constants = {
  LIP: {
    API: {
      HOST: process.env.NEXT_PUBLIC_LIP_API_HOST || "",
    },
    DOMAIN: "lifeisplan.me",
    HOST: process.env.NEXT_PUBLIC_LIP_HOST,
  },
  NODE_ENV: process.env.NODE_ENV,
  PROJECT_NAME: "LifeIsPlan",
  FIREBASE: {
    VAPID_KEY: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
  },
};

export default constants;
