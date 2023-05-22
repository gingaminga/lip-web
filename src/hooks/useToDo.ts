import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCalendarTimestamp } from "@/store/todo/reducer";
import { getMoveDateByMonth } from "@/utils/date";

/**
 * @description 할 일 관련 hook
 */
export default function useToDo() {
  const calendarTimestamp = useAppSelector((state) => state.todo.calendarTimestamp);
  const dispatch = useAppDispatch();

  /**
   * @description 오늘 날짜로 바꾸기
   */
  const changeToday = () => {
    const currentTimestamp = new Date().getTime();
    dispatch(setCalendarTimestamp(currentTimestamp));
  };

  /**
   * @description 전 달로 바꾸기
   */
  const changePrevMonth = () => {
    const prevDate = getMoveDateByMonth(-1, new Date(calendarTimestamp)).toDate();
    const prevTimestamp = prevDate.getTime();

    dispatch(setCalendarTimestamp(prevTimestamp));
  };

  /**
   * @description 다음 달로 바꾸기
   */
  const changeNextMonth = () => {
    const nextDate = getMoveDateByMonth(1, new Date(calendarTimestamp)).toDate();
    const nextTimestamp = nextDate.getTime();

    dispatch(setCalendarTimestamp(nextTimestamp));
  };

  return {
    calendarDate: new Date(calendarTimestamp),
    changePrevMonth,
    changeNextMonth,
    changeToday,
  };
}
