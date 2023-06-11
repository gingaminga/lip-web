import { IDateOption, getYYYYMMDD } from "@/utils/date";
import Link from "next/link";

interface ICalendarOfOnceWeek {
  days: IDateOption[];
}

interface IDayStlye {
  textColor?: string;
}

interface IDay {
  date: number;
  month: number;
  styles?: IDayStlye;
  year: number;
}

/**
 * @description 일 컴포넌트
 */
function Day({ date, month, styles, year }: IDay) {
  const { textColor } = styles || {};

  const query = {
    date: getYYYYMMDD("", new Date(`${year}-${month}-${date}`)),
  };

  return (
    <td className="hover:bg-base-300 hover:cursor-pointer">
      <Link
        className={`block w-full h-full font-semibold ${textColor}`}
        href={{
          pathname: "/todo",
          query,
        }}
      >
        {date}
      </Link>
    </td>
  );
}

/**
 * @description 달력의 한 주 컴포넌트
 */
export default function CalendarOfOnceWeek({ days }: ICalendarOfOnceWeek) {
  return (
    <>
      {days.map((option) => {
        const { date, day, isSameMonth, month, year } = option;

        let textColor;

        if (!isSameMonth) {
          // 해당 월이 아닌 경우
          textColor = "text-base-300";
        } else if (day === 6) {
          // 토요일
          textColor = "text-blue-400";
        } else if (day === 0) {
          // 일요일
          textColor = "text-red-400";
        }

        return (
          <Day
            date={date}
            key={`calendar-of-week-${date}-${day}`}
            month={month}
            styles={{
              textColor,
            }}
            year={year}
          />
        );
      })}
    </>
  );
}
