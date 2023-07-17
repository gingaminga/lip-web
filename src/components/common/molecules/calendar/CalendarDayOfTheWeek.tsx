import { DAY_OF_THE_WEEK } from "@/utils/date";

interface IDayOfTheWeekStyle {
  color?: string;
}

interface IDayOfTheWeek {
  styles?: IDayOfTheWeekStyle;
  text: string;
}

/**
 * @description 요일 컴포넌트
 */
function DayOfTheWeek({ styles, text }: IDayOfTheWeek) {
  const { color = "" } = styles || {};

  return <td className={`${color} text-xs text-center p-0 pt-2 pb-2`}>{text}</td>;
}

/**
 * @description 달력 요일 컴포넌트
 */
export default function CalendarDayOfTheWeek() {
  return (
    <tr>
      {DAY_OF_THE_WEEK.map((days) => {
        const { color, id, text } = days;

        return (
          <DayOfTheWeek
            key={`Calendar-Day-${id}-${text}`}
            styles={{
              color,
            }}
            text={text}
          />
        );
      })}
    </tr>
  );
}
