import dayjs from "dayjs";
import constants from "@/utils/constants";

export const logger = {
  error(...message: Array<any>) {
    const timeFormat = dayjs().format("mm:ss:SSS");
    console.error(`[${timeFormat}]`, ...message);
  },
  log(...message: Array<any>) {
    if (constants.NODE_ENV !== "production") {
      const timeFormat = dayjs().format("mm:ss:SSS");
      console.log(`[${timeFormat}]`, ...message);
    }
  },
  warn(...message: Array<any>) {
    const timeFormat = dayjs().format("mm:ss:SSS");
    console.warn(`[${timeFormat}]`, ...message);
  },
};
