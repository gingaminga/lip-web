import CalendarOfOnceWeek from "@/components/common/molecules/calendar/CalendarOfOnceWeek";
import { ICalendarToDoData } from "@/types/todo";
import { IDateOption, getDaysOfWeek } from "@/utils/date";

interface ICalendarMonth {
  days: IDateOption[];
  items?: ICalendarToDoData[];
}

/**
 * @description 달력의 한 달 컴포넌트
 */
export default function CalendarOfMonth({ days, items = [] }: ICalendarMonth) {
  const numberOfWeek = days.length / 7; // 한 달의 주 수 계산
  const weeks = [...Array(numberOfWeek)].map((value, index) => index + 1);

  return (
    <>
      {weeks.map((week) => {
        const filterdDays = getDaysOfWeek(days, week); // 한 주의 days 정보 가져오기

        const weekItems = items.filter((item) => {
          const [currentDay] = filterdDays.filter(
            (day) => day.isSameMonth && day.date === item.date && day.month === item.month && day.year === item.year,
          );

          if (!currentDay) {
            return false;
          }

          return true;
        });

        return (
          <tr key={`calendar-of-month-${week}`}>
            <CalendarOfOnceWeek days={filterdDays} items={weekItems} />
          </tr>
        );
      })}
    </>
  );
}
