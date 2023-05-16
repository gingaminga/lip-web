import dayjs from "dayjs";

export const timeout = (ms = 500) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const getYYYYMMDD = (date = new Date()) => dayjs(date).format("YYYYMMDD");
