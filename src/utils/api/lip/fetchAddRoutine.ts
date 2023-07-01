import { TRoutineColor } from "@/types/color";
import type { IResponseLIPFormat } from "@/types/common";
import { isFetchFailure } from "@/types/guard";
import { IRoutineData } from "@/types/routine";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";

export interface IRequestAddRoutineParams {
  alarmHour: number;
  alarmMinute: number;
  color: TRoutineColor;
  content: string;
  days: string;
}

/**
 * @description 루틴 추가하기
 * @param content 루틴 내용
 * @param days 요일
 * @param color 색상
 * @param alarmHour 시
 * @param alarmMinute 분
 * @returns Routine
 */
export const fetchAddRoutine = async (
  content: string,
  days: string,
  color: TRoutineColor,
  alarmHour: number,
  alarmMinute: number,
) => {
  const endpoint = LIP_URL.API.ROUTINE.ADD_ROUTINE;
  const params = {
    alarmHour,
    alarmMinute,
    color,
    content,
    days,
  };

  const { data: axiosData } = await LifeIsPlanClient.post<IRequestAddRoutineParams, IResponseLIPFormat<IRoutineData>>(
    endpoint,
    params,
  );
  const { data, status } = axiosData;

  if (isFetchFailure(status)) {
    throw new Error("Fetch failure add routine..");
  }

  return data;
};
