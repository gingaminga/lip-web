import { TRoutineColor } from "@/types/color";
import type { IResponseLIPFormat } from "@/types/common";
import { isFetchFailure } from "@/types/guard";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";

export interface IRequestModifyRoutineParams {
  alarm_hour: number;
  alarm_minute: number;
  color: TRoutineColor;
  content: string;
  days: string;
  id: number;
}

/**
 * @description 루틴 수정하기
 * @param id routine ID
 * @param content 루틴 내용
 * @param days 요일
 * @param color 색상
 * @param alarmHour 시
 * @param alarmMinute 분
 * @returns true
 */
export const fetchModifyRoutine = async (
  id: number,
  content: string,
  days: string,
  color: TRoutineColor,
  alarmHour: number,
  alarmMinute: number,
) => {
  const endpoint = LIP_URL.API.ROUTINE.MODIFY_ROUTINE;
  const params = {
    alarm_hour: alarmHour,
    alarm_minute: alarmMinute,
    color,
    content,
    days,
    id,
  };

  const { data: axiosData } = await LifeIsPlanClient.put<IRequestModifyRoutineParams, IResponseLIPFormat<boolean>>(
    endpoint,
    params,
  );
  const { data, status } = axiosData;

  if (isFetchFailure(status) || !data) {
    throw new Error("Fetch failure modify routine..");
  }

  return data;
};
