const constants = {
  LIP: {
    API: {
      HOST: process.env.NEXT_PUBLIC_LIP_HOST || "",
    },
    DOMAIN: "lifeisplan.me",
  },
  NODE_ENV: process.env.NODE_ENV,
  PROJECT_NAME: "LifeIsPlan",
  FIREBASE: {
    VAPID_KEY: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
  },
};

export default constants;
