import dayjs from "dayjs";

/**
 * @description 년월일 정보 가져오기
 * @param delim 구분자
 * @param date 날짜 객체
 * @returns YYYYMMDD string
 */
export const getYYYYMMDD = (delim = "-", date = new Date()) => dayjs(date).format(`YYYY${delim}MM${delim}DD`);
