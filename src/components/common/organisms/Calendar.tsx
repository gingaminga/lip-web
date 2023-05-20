import CalendarDayOfTheWeek from "@/components/common/molecules/CalendarDayOfTheWeek";
import CalendarOfMonth from "@/components/common/molecules/CalendarOfMonth";
import { getDays } from "@/utils/date";

/**
 * @description 달력 컴포넌트
 */
export default function Calendar() {
  const days = getDays();

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
