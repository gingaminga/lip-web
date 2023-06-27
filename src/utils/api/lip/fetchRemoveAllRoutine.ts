import type { IResponseLIPFormat } from "@/types/common";
import { isFetchFailure } from "@/types/guard";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";

/**
 * @description 전체 루틴 삭제하기
 * @returns true
 */
export const fetchRemoveAllRoutine = async () => {
  const endpoint = LIP_URL.API.ROUTINE.REMOVE_ALL_ROUTINE;

  const { data: axiosData } = await LifeIsPlanClient.delete<undefined, IResponseLIPFormat<boolean>>(endpoint);
  const { data, status } = axiosData;

  if (isFetchFailure(status) || !data) {
    throw new Error("Fetch failure remove all routine..");
  }

  return data;
};
