import CalendarMoveDate from "@/components/common/molecules/CalendarMoveDate";
import Calendar from "@/components/common/organisms/Calendar";
import useToDo from "@/hooks/useToDo";
import { checkIsCurrentMonth } from "@/utils/date";

export default function CalendarView() {
  const { calendarDate, changeNextMonth, changePrevMonth, changeToday } = useToDo();

  const isCurrentMonth = checkIsCurrentMonth(calendarDate);

  return (
    <div className="w-full h-full">
      <div className="h-10 flex items-center justify-end">
        {!isCurrentMonth && (
          <button className="btn btn-ghost btn-sm" onClick={changeToday} type="button">
            오늘..
          </button>
        )}
        <CalendarMoveDate changeNextMonth={changeNextMonth} changePrevMonth={changePrevMonth} date={calendarDate} />
      </div>
      <div className="h-[calc(100%-2.5rem)] flex items-center justify-center">
        <Calendar date={calendarDate} />
      </div>
    </div>
  );
}
