import type { IResponseLIPFormat } from "@/types/common";
import { isFetchFailure } from "@/types/guard";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";

export interface IRequestModifyToDoParams {
  content: string;
  id: number;
}

/**
 * @description 할 일 수정하기
 * @param id routine ID
 * @param content 할 일 내용
 * @returns true
 */
export const fetchModifyToDo = async (id: number, content: string) => {
  const endpoint = LIP_URL.API.TODO.MODIFY_TODO;
  const params = {
    content,
    id,
  };

  const { data: axiosData } = await LifeIsPlanClient.patch<IRequestModifyToDoParams, IResponseLIPFormat<boolean>>(
    endpoint,
    params,
  );
  const { data, status } = axiosData;

  if (isFetchFailure(status) || !data) {
    throw new Error("Fetch failure modify todo..");
  }

  return data;
};
