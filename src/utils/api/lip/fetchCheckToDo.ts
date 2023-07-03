import type { IResponseLIPFormat } from "@/types/common";
import { isFetchFailure } from "@/types/guard";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";

export interface IRequestCheckToDoParams {
  checked: number;
  id: number;
}

/**
 * @description 할 일 완료 유무 체크하기
 * @param id 할 일 ID
 * @param checked 완료 유무
 * 0 : 완료 x
 * 1 : 완료
 * @returns true / false
 */
export const fetchCheckToDo = async (id: number, checked: number) => {
  const endpoint = LIP_URL.API.TODO.CHECK_TODO;
  const params = {
    checked,
    id,
  };

  const { data: axiosData } = await LifeIsPlanClient.patch<IRequestCheckToDoParams, IResponseLIPFormat<boolean>>(
    endpoint,
    params,
  );
  const { data, status } = axiosData;

  if (isFetchFailure(status)) {
    throw new Error("Fetch failure check todo..");
  }

  return data;
};
