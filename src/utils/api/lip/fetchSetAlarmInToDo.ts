import type { IResponseLIPFormat } from "@/types/common";
import { isFetchFailure } from "@/types/guard";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";

export interface IRequestSetAlarmInToDoParams {
  alarmHour: number;
  alarmMinute: number;
  id: number;
}

/**
 * @description 할 일의 알람 정보 설정하기
 * @param id 할 일 ID
 * @param alarmHour 시
 * @param alarmMinute 분
 * @returns boolean
 */
export const fetchSetAlarmInToDo = async (id: number, alarmHour: number, alarmMinute: number) => {
  const endpoint = LIP_URL.API.TODO.SET_ALARM;
  const params = {
    alarmHour,
    alarmMinute,
    id,
  };

  const { data: axiosData } = await LifeIsPlanClient.patch<IRequestSetAlarmInToDoParams, IResponseLIPFormat<boolean>>(
    endpoint,
    params,
  );
  const { data, status } = axiosData;

  if (isFetchFailure(status) || !data) {
    throw new Error("Fetch failure modify routine..");
  }

  return data;
};
