import type { IResponseLIPFormat } from "@/types/common";
import { isFetchFailure } from "@/types/guard";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";

export interface IRequestRemoveToDoParams {
  id: number;
}

/**
 * @description 할 일 삭제하기
 * @param id 할 일 ID
 * @returns true
 */
export const fetchRemoveToDo = async (id: number) => {
  const endpoint = LIP_URL.API.TODO.REMOVE_TODO;
  const params = {
    id,
  };

  const { data: axiosData } = await LifeIsPlanClient.delete<IRequestRemoveToDoParams, IResponseLIPFormat<boolean>>(
    endpoint,
    params,
  );
  const { data, status } = axiosData;

  if (isFetchFailure(status) || !data) {
    throw new Error("Fetch failure remove todo..");
  }

  return data;
};
