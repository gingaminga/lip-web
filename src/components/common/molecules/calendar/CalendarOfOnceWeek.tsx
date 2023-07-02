import { ICalendarToDoData } from "@/types/todo";
import { IDateOption, getYYYYMMDD } from "@/utils/date";
import Link from "next/link";
import { useMemo } from "react";

interface ICalendarOfOnceWeek {
  days: IDateOption[];
  items: ICalendarToDoData[];
}

interface IDayStlye {
  textColor?: string;
}

interface IDay {
  achievementRate?: number; // 달성률
  date: number;
  month: number;
  styles?: IDayStlye;
  year: number;
}

/**
 * @description 일 컴포넌트
 */
function Day({ achievementRate, date, month, styles, year }: IDay) {
  const { textColor } = styles || {};

  const query = {
    date: getYYYYMMDD("", new Date(`${year}-${month}-${date}`)),
  };

  const InfoView = useMemo(() => {
    if (achievementRate === undefined) {
      return <div className="flex flex-col w-full h-full justify-between">{date}</div>;
    }

    let achievementRateTextColor = "text-success";
    let progressBacgroundColor = "bg-success-200";
    let progressBarColor = "progress-success";

    if (achievementRate < 1) {
      achievementRateTextColor = "text-neutral-400";
      progressBacgroundColor = "bg-neutral-200";
      progressBarColor = "";
    } else if (achievementRate < 40) {
      achievementRateTextColor = "text-rose-400";
      progressBacgroundColor = "bg-rose-200";
      progressBarColor = "progress-error";
    } else if (achievementRate < 70) {
      achievementRateTextColor = "text-warning";
      progressBacgroundColor = "bg-amber-200";
      progressBarColor = "progress-warning";
    } else if (achievementRate < 100) {
      achievementRateTextColor = "text-accent";
      progressBacgroundColor = "bg-accent-200";
      progressBarColor = "progress-accent";
    }

    return (
      <div className="flex flex-col w-full h-full justify-between">
        {date}
        <div className="flex flex-col justify-center items-center max-sm:justify-end">
          <span className={`text-xs ${achievementRateTextColor}`}>{achievementRate}%</span>
          <progress
            className={`progress ${progressBarColor} ${progressBacgroundColor}  w-full h-3 max-sm:hidden`}
            value={achievementRate}
            max="100"
          />
        </div>
      </div>
    );
  }, [achievementRate, date]);

  return (
    <td className="hover:bg-base-300 hover:cursor-pointer">
      <Link
        className={`block w-full h-full font-semibold ${textColor}`}
        href={{
          pathname: "/todo",
          query,
        }}
      >
        {InfoView}
      </Link>
    </td>
  );
}

/**
 * @description 달력의 한 주 컴포넌트
 */
export default function CalendarOfOnceWeek({ days, items }: ICalendarOfOnceWeek) {
  return (
    <>
      {days.map((option) => {
        const { date, day, isSameMonth, month, year } = option;

        const myItem = items.find((item) => item.date === date);

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
            achievementRate={myItem?.achievementRate}
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
