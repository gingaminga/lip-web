import { TActvieStatusByDay, TDaysOfWeek } from "@/types/date";
import { DAY_OF_THE_WEEK } from "@/utils/date";

interface IDayOfWeekToggleButtonGroup {
  daysOfWeek: TActvieStatusByDay;
  toggleEvent: (day: TDaysOfWeek) => void;
}

/**
 * @description 요일 선택 버튼 그룹
 */
export default function DayOfWeekToggleButtonGroup({ daysOfWeek, toggleEvent }: IDayOfWeekToggleButtonGroup) {
  return (
    <div className="flex flex-wrap gap-5 max-lg:gap-3 max-sm:gap-2">
      {DAY_OF_THE_WEEK.map((days) => {
        const { id, text } = days;
        const lowerDay = text.toLowerCase() as TDaysOfWeek;

        const isClicked = daysOfWeek[lowerDay];
        const className = `btn btn-sm w-13 ${
          isClicked ? "btn-accent text-white" : " btn-outline"
        } max-sm:btn-xs max-sm:w-10`;

        const onClick = () => {
          toggleEvent(lowerDay);
        };

        return (
          <button className={className} key={`day-of-week-${id}-${text}`} onClick={onClick} type="button">
            {text}
          </button>
        );
      })}
    </div>
  );
}
