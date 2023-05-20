import { getYYYYMM } from "@/utils/date";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

interface ICalendarMoveDate {
  changeNextDate: () => void;
  changePrevDate: () => void;
  date?: Date;
}

/**
 * @description 달력 날짜 이동 컴포넌트
 */
export default function CalendarMoveDate({ changeNextDate, changePrevDate, date }: ICalendarMoveDate) {
  return (
    <>
      <button className="btn btn-ghost btn-circle btn-sm" onClick={changePrevDate} type="button">
        <IoMdArrowDropleft className="h-5 w-5" />
      </button>
      <h2 className="text-xl">{getYYYYMM(". ", date)}</h2>
      <button className="btn btn-ghost btn-circle btn-sm" onClick={changeNextDate} type="button">
        <IoMdArrowDropright className="h-5 w-5" />
      </button>
    </>
  );
}
