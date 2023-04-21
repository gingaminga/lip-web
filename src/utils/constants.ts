const constants = {
  LIP: {
    API: {
      HOST: process.env.NEXT_PUBLIC_LIP_HOST || "",
    },
  },
  NODE_ENV: process.env.NODE_ENV,
};

export default constants;
