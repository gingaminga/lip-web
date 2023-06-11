import CalendarDayOfTheWeek from "@/components/common/molecules/calendar/CalendarDayOfTheWeek";
import CalendarOfMonth from "@/components/common/molecules/calendar/CalendarOfMonth";
import { getDays } from "@/utils/date";

interface ICalendar {
  date?: Date;
}

/**
 * @description 달력 컴포넌트
 */
export default function Calendar({ date }: ICalendar) {
  const days = getDays(date);

  return (
    <table className="table w-full h-full">
      <thead>
        <CalendarDayOfTheWeek />
      </thead>
      <tbody>
        <CalendarOfMonth days={days} />
      </tbody>
    </table>
  );
}
