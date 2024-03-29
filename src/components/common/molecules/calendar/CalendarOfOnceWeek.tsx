import { ICalendarToDoData } from "@/types/todo";
import { ROUTER_PATH } from "@/utils/config";
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
  isToday: boolean;
  month: number;
  styles?: IDayStlye;
  year: number;
}

/**
 * @description 일 컴포넌트
 */
function Day({ achievementRate, date, isToday, month, styles, year }: IDay) {
  const { textColor } = styles || {};

  const query = {
    date: getYYYYMMDD("", new Date(year, month - 1, date)),
  };

  const InfoView = useMemo(() => {
    const todayClassName = isToday ? "w-6 h-6 text-center rounded-xl bg-base-300" : "";

    if (achievementRate === undefined) {
      return (
        <div className="w-full h-full">
          <h6 className={todayClassName}>{date}</h6>
        </div>
      );
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
      <>
        <div className="w-full h-1/2">
          <h6 className={todayClassName}>{date}</h6>
        </div>
        <div className="flex flex-col justify-end w-full h-1/2">
          <div className="flex w-full justify-center max-sm:justify-start">
            <span className={`text-xs text-center max-sm:font-normal ${achievementRateTextColor}`}>
              {achievementRate}%
            </span>
          </div>
          <progress
            className={`progress ${progressBarColor} ${progressBacgroundColor} h-2 max-sm:hidden`}
            value={achievementRate}
            max="100"
          />
        </div>
      </>
    );
  }, [achievementRate, date, isToday]);

  return (
    <td className="w-[14%] h-[16%] hover:bg-base-300 hover:cursor-pointer max-sm:p-2">
      <Link
        className={`block w-full h-full font-semibold ${textColor}`}
        href={{
          pathname: ROUTER_PATH.TODO,
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
  const currentDate = new Date();

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

        let isToday = false;

        if (currentDate.getMonth() + 1 === month && currentDate.getDate() === date && isSameMonth) {
          isToday = true;
        }

        return (
          <Day
            achievementRate={myItem?.achievementRate}
            date={date}
            isToday={isToday}
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
