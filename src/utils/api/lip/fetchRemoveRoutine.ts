import type { IResponseLIPFormat } from "@/types/common";
import { isFetchFailure } from "@/types/guard";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";

export interface IRequestRemoveRoutineParams {
  id: number;
}

/**
 * @description 루틴 삭제하기
 * @param id 루틴 ID
 * @returns true
 */
export const fetchRemoveRoutine = async (id: number) => {
  const endpoint = LIP_URL.API.ROUTINE.REMOVE_ROUTINE;
  const params = {
    id,
  };

  const { data: axiosData } = await LifeIsPlanClient.delete<IRequestRemoveRoutineParams, IResponseLIPFormat<boolean>>(
    endpoint,
    params,
  );
  const { data, status } = axiosData;

  if (isFetchFailure(status) || !data) {
    throw new Error("Fetch failure remove routine..");
  }

  return data;
};
