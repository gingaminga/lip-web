import type { IResponseLIPFormat } from "@/types/common";
import { isFetchFailure } from "@/types/guard";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";

/**
 * @description 전체 할 일 삭제하기
 * @returns true
 */
export const fetchRemoveAllToDo = async () => {
  const endpoint = LIP_URL.API.TODO.REMOVE_ALL_TODO;

  const { data: axiosData } = await LifeIsPlanClient.delete<undefined, IResponseLIPFormat<boolean>>(endpoint);
  const { data, status } = axiosData;

  if (isFetchFailure(status) || !data) {
    throw new Error("Fetch failure remove all todo..");
  }

  return data;
};
