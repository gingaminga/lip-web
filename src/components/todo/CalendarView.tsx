import CalendarMoveDate from "@/components/common/molecules/calendar/CalendarMoveDate";
import Calendar from "@/components/common/organisms/Calendar";
import ArticleTemplate from "@/components/common/templates/ArticleTemplate";
import useToDosQuery from "@/hooks/queries/useToDosQuery";
import useToDo from "@/hooks/useToDo";
import { checkIsCurrentMonth, getFirstAndLastDay, getYYYYMM } from "@/utils/date";
import { getCalendarInfo } from "@/utils/todo";

export default function CalendarView() {
  const { calendarDate, changeNextMonth, changePrevMonth, changeToday } = useToDo();
  const currentDate = getYYYYMM("", calendarDate);
  const { data: allToDos } = useToDosQuery(currentDate, {
    cacheTime: 0,
  });

  const { final, first } = getFirstAndLastDay(currentDate, "0");
  const startDate = `${currentDate}${first}`;
  const endDate = `${currentDate}${final}`;

  const calendarItems = getCalendarInfo(allToDos?.todos || [], allToDos?.routineTodos || [], startDate, endDate);

  const isCurrentMonth = checkIsCurrentMonth(calendarDate);

  return (
    <ArticleTemplate
      contentStyles={{
        maxWidth: "max-w-full",
      }}
    >
      <div className="h-10 pb-3 flex items-center justify-end">
        {!isCurrentMonth && (
          <button className="btn btn-ghost btn-sm" onClick={changeToday} type="button">
            오늘..
          </button>
        )}
        <CalendarMoveDate changeNextMonth={changeNextMonth} changePrevMonth={changePrevMonth} date={calendarDate} />
      </div>
      <div className="h-[calc(100%-2.5rem)] flex items-center justify-center">
        <Calendar date={calendarDate} items={calendarItems} />
      </div>
    </ArticleTemplate>
  );
}
