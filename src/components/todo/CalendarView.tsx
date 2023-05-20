import CalendarMoveDate from "@/components/common/molecules/CalendarMoveDate";
import Calendar from "@/components/common/organisms/Calendar";
import useDate from "@/hooks/useDate";
import { checkIsCurrentMonth } from "@/utils/date";

export default function CalendarView() {
  const { changeNextDate, changePrevDate, changeToday, date } = useDate();

  const isCurrentMonth = checkIsCurrentMonth(date);

  return (
    <div className="w-full h-full">
      <div className="h-10 flex items-center justify-end">
        {!isCurrentMonth && (
          <button className="btn btn-ghost btn-sm" onClick={changeToday} type="button">
            오늘..
          </button>
        )}
        <CalendarMoveDate changeNextDate={changeNextDate} changePrevDate={changePrevDate} date={date} />
      </div>
      <div className="h-[calc(100%-2.5rem)] flex items-center justify-center">
        <Calendar date={date} />
      </div>
    </div>
  );
}
