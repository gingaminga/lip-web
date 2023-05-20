import dayjs from "dayjs";

export interface IDateOption {
  date: number; // 일
  day: number; // 요일
  isSameMonth: boolean; // 해당 월이 맞는지 여부
  month: number;
  year: number;
}

/**
 * @description 한 주의 요일 정보
 */
export const DAY_OF_THE_WEEK = [
  {
    color: "text-red-400",
    id: 1,
    text: "SUN",
  },
  {
    id: 2,
    text: "MON",
  },
  {
    id: 3,
    text: "TUE",
  },
  {
    id: 4,
    text: "WED",
  },
  {
    id: 5,
    text: "THU",
  },
  {
    id: 6,
    text: "FRI",
  },
  {
    color: "text-blue-400",
    id: 7,
    text: "SAT",
  },
];

/**
 * @description 년월일 정보 가져오기
 * @param delim 구분자
 * @param date 날짜 객체
 * @returns YYYYMMDD string
 */
export const getYYYYMMDD = (delim = "-", date = new Date()) => dayjs(date).format(`YYYY${delim}MM${delim}DD`);

/**
 * @description 년월 정보 가져오기
 * @param delim 구분자
 * @param date 날짜 객체
 * @returns YYYYMM string
 */
export const getYYYYMM = (delim = "-", date = new Date()) => dayjs(date).format(`YYYY${delim}MM`);

/**
 * @description 해당 달에 해당하는 날짜 리스트 가져오기
 * @param date 날짜 객체
 * @returns 날짜 리스트
 */
export const getDays = (date = new Date()) => {
  let current = dayjs(date);
  current = current.set("date", 1); // 첫번째 날짜로 설정

  const day = current.get("day"); // 시작하는 요일
  const month = current.get("month"); // 현재 달
  const lastDate = current.daysInMonth(); // 현재 달의 마지막 날

  const week = Math.ceil((lastDate + day) / 7); // 현재 달의 주 수
  const countOfMonth = week * 7; // 해당 달의 일 수

  const startDate = current.get("date") - day - 1; // 최초 날짜 설정
  current = current.set("date", startDate);

  const days: IDateOption[] = [...new Array(countOfMonth)].map(() => {
    const nextDate = current.get("date") + 1;
    current = current.set("date", nextDate);

    return {
      date: current.get("date"),
      day: current.get("day"),
      isSameMonth: month === current.get("month"),
      month: current.get("month") + 1,
      year: current.get("year"),
    };
  });

  return days;
};

/**
 * @description 한 주에 해당하는 날짜 리스트 가져오기
 * @param days 한 달 리스트
 * @param week 주차 수
 * @returns 한 주 리스트
 */
export const getDaysOfWeek = (days: IDateOption[], week: number) =>
  days.filter(
    (day, index) => index >= week * 7 - 7 && index < week * 7, // 한 주의 시작과 끝
  );

/**
 * @description 해당 날짜보다 이전/이후 달 정보 가져오기
 * @param value 이동할 개월 수
 * @param date 날짜 객체
 * @returns 원하는 날짜 객체
 */
export const getMoveDateByMonth = (value: number, date = new Date()) => {
  const currentDate = dayjs(date);
  const changeDate = currentDate.set("month", currentDate.get("month") + value);

  return changeDate;
};

/**
 * @description 같은 년/월인지 확인하기
 * @param date 비교할 날짜 객체
 * @returns boolean
 */
export const checkIsCurrentMonth = (date = new Date()) => {
  const currentDate = dayjs();
  const compareDate = dayjs(date);

  const currentYear = currentDate.get("year");
  const compareYear = compareDate.get("year");

  if (currentYear !== compareYear) {
    return false;
  }

  const currentMonth = currentDate.get("month");
  const compareMonth = compareDate.get("month");

  if (currentMonth !== compareMonth) {
    return false;
  }

  return true;
};
