import { useCallback, useReducer } from "react";

interface IAction {
  data: number;
  type: "SET_HOURS" | "SET_MINUTES" | "SET_SECONDS";
}

interface IState {
  hours: number;
  minutes: number;
  seconds: number;
}

const initialState: IState = {
  hours: 12,
  minutes: 12,
  seconds: 0,
};

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "SET_HOURS": {
      const newState = {
        ...state,
        hours: action.data,
      };

      return newState;
    }
    case "SET_MINUTES": {
      const newState = {
        ...state,
        minutes: action.data,
      };

      return newState;
    }
    case "SET_SECONDS": {
      const newState = {
        ...state,
        seconds: action.data,
      };

      return newState;
    }
    default: {
      throw new Error();
    }
  }
};

/**
 * @description 시간 선택 hook
 */
export default function useTimePicker(state = initialState) {
  const [time, dispatch] = useReducer(reducer, state);

  const changeHours = useCallback((hours: number) => {
    dispatch({
      data: hours,
      type: "SET_HOURS",
    });
  }, []);

  const changeMinutes = useCallback((minutes: number) => {
    dispatch({
      data: minutes,
      type: "SET_MINUTES",
    });
  }, []);

  const changeSeconds = useCallback((seconds: number) => {
    dispatch({
      data: seconds,
      type: "SET_SECONDS",
    });
  }, []);

  return {
    changeHours,
    changeMinutes,
    changeSeconds,
    hours: time.hours,
    minutes: time.minutes,
    seconds: time.seconds,
  };
}
