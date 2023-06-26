import type { IResponseLIPFormat } from "@/types/common";
import { isFetchFailure } from "@/types/guard";
import { IRoutineData } from "@/types/routine";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";

interface IRequestGetRoutinesParams {
  id: number;
  limit: number;
}

/**
 * @description 루틴 정보들 가져오기
 * @param id 루틴 ID
 * @param limit 개수
 */
export const fetchGetRoutines = async (id: number, limit: number) => {
  const endpoint = LIP_URL.API.ROUTINE.GET_ROUTINES;
  const params = {
    id,
    limit,
  };

  const { data: axiosData } = await LifeIsPlanClient.get<IRequestGetRoutinesParams, IResponseLIPFormat<IRoutineData[]>>(
    endpoint,
    params,
  );
  const { data, status } = axiosData;

  if (isFetchFailure(status)) {
    throw new Error("Fetch failure get routines..");
  }

  return data;
};
