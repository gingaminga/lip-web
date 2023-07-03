import type { IResponseLIPFormat } from "@/types/common";
import { isFetchFailure } from "@/types/guard";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";

export interface IRequestCheckRoutineToDoParams {
  checked: number;
  date: string;
  id: number;
}

/**
 * @description 루틴 할 일 완료 유무 체크하기
 * @param id 루틴 ID
 * @param date 날짜 (YYYYMMDD)
 * @param checked 완료 유무
 * 0 : 완료 x
 * 1 : 완료
 * @returns true / false
 */
export const fetchCheckRoutineToDo = async (id: number, date: string, checked: number) => {
  const endpoint = LIP_URL.API.ROUTINE.CHECK_ROUTINE_TODO;
  const params = {
    checked,
    date,
    id,
  };

  const { data: axiosData } = await LifeIsPlanClient.put<IRequestCheckRoutineToDoParams, IResponseLIPFormat<boolean>>(
    endpoint,
    params,
  );
  const { data, status } = axiosData;

  if (isFetchFailure(status)) {
    throw new Error("Fetch failure check routine todo..");
  }

  return data;
};
