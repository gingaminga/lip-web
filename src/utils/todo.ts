import { ICalendarToDoData, IRouTineToDoData, IToDoData } from "@/types/todo";
import { getParsingYYYYMMDD } from "@/utils/date";

/**
 * @description 달령의 추가 정보 가져오기
 * @param todos 할 일들
 * @param routines 루틴 할 일들
 * @param startDate 시작 날짜
 * @param endDate 종료 날짜
 */
export const getCalendarInfo = (
  todos: IToDoData[],
  routineToDos: IRouTineToDoData[],
  startDate: string,
  endDate: string,
) => {
  const calendarItems: ICalendarToDoData[] = [];
  const count = Number(endDate) - Number(startDate);

  for (let i = 0; i <= count; i++) {
    const currentDate = String(Number(startDate) + i);

    const filteredToDos = todos.filter((todo) => todo.date === currentDate);
    const filteredRoutineToDos = routineToDos.filter((routineToDo) => routineToDo.date === currentDate);

    const toDosCountByDate = filteredToDos.length;
    const routineToDosCountByDate = filteredRoutineToDos.length;
    const allToDosCountByDate = toDosCountByDate + routineToDosCountByDate;

    const successToDosCountByDate = filteredToDos.filter((todo) => todo.checked).length;
    const successRoutineToDosCountByDate = filteredRoutineToDos.filter((routineToDo) => routineToDo.checked).length;
    const allSuccessToDosCountByDate = successToDosCountByDate + successRoutineToDosCountByDate;

    if (!allSuccessToDosCountByDate && !allToDosCountByDate) {
      // eslint-disable-next-line no-continue
      continue;
    }

    const rate = Math.floor((allSuccessToDosCountByDate / allToDosCountByDate) * 100);

    const dayInfo = getParsingYYYYMMDD(currentDate);

    const calendarInfo = {
      achievementRate: rate,
      ...dayInfo,
    };

    calendarItems.push(calendarInfo);
  }

  return calendarItems;
};
