import type { IResponseLIPFormat } from "@/types/common";
import { isFetchFailure } from "@/types/guard";
import { IRoutineData } from "@/types/routine";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";

interface IRequestGetDetailRoutineParams {
  id: number;
}

/**
 * @description 루틴 정보 가져오기
 * @param id 루틴 ID
 */
export const fetchGetDetailRoutine = async (id: number) => {
  const endpoint = LIP_URL.API.ROUTINE.GET_DETAIL_ROUTINE;
  const params = {
    id,
  };

  const { data: axiosData } = await LifeIsPlanClient.get<
    IRequestGetDetailRoutineParams,
    IResponseLIPFormat<IRoutineData>
  >(endpoint, params);
  const { data, status } = axiosData;

  if (isFetchFailure(status)) {
    throw new Error("Fetch failure get detail routine..");
  }

  return data;
};
