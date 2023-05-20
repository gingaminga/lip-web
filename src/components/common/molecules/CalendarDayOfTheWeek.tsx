import { DAY_OF_THE_WEEK } from "@/utils/date";
import { useCallback } from "react";

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

  const TextView = useCallback(() => {
    if (color) {
      return <span className={`${color}`}>{text}</span>;
    }

    return <span>{text}</span>;
  }, [color, text]);

  return <td>{TextView()}</td>;
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
