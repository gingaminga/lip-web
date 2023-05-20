import { getMoveDateByMonth } from "@/utils/date";
import { useState } from "react";

/**
 * @description 날짜 관련 hook
 * @param initDate 초기 날짜
 */
export default function useDate(initDate = new Date()) {
  const [date, setDate] = useState(initDate); // 날짜

  /**
   * @description 오늘 날짜로 바꾸기
   */
  const changeToday = () => {
    setDate(initDate);
  };

  /**
   * @description 전 달로 바꾸기
   */
  const changePrevDate = () => {
    const prevDate = getMoveDateByMonth(-1, date).toDate();

    setDate(prevDate);
  };

  /**
   * @description 다음 달로 바꾸기
   */
  const changeNextDate = () => {
    const nextDate = getMoveDateByMonth(1, date).toDate();

    setDate(nextDate);
  };

  return {
    changeNextDate,
    changePrevDate,
    changeToday,
    date,
  };
}
