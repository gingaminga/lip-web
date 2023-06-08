import { TActvieStatusByDay, TDaysOfWeek } from "@/types/date";
import { useReducer } from "react";

interface IAction {
  day: TDaysOfWeek;
  type: string;
}

const initialState: TActvieStatusByDay = {
  fri: false,
  mon: false,
  sat: false,
  sun: false,
  thr: false,
  tue: false,
  wed: false,
};

const reducer = (state: TActvieStatusByDay, action: IAction) => {
  switch (action.type) {
    case "toggle": {
      const newState = {
        ...state,
        [action.day]: !state[action.day],
      };

      return newState;
    }
    default: {
      throw new Error();
    }
  }
};

/**
 * @description 요일 관련 hook
 */
export default function useDayOfWeek() {
  const [daysOfWeek, dispatch] = useReducer(reducer, initialState);

  /**
   * @description 요일 클릭 상태 변경하기
   * @param day 요일
   */
  const toggleDayOfWeek = (day: TDaysOfWeek) => {
    dispatch({
      day,
      type: "toggle",
    });
  };

  return {
    daysOfWeek,
    toggleDayOfWeek,
  };
}
