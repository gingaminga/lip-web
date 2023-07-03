import type { IResponseLIPFormat } from "@/types/common";
import { isFetchFailure } from "@/types/guard";
import type { IToDoData } from "@/types/todo";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";

export interface IRequestAddToDoParams {
  content: string;
  date: string;
}

/**
 * @description 할 일 추가하기
 * @param content 할 일 내용
 * @param date 날짜 (YYYYMMDD)
 * @returns ToDo
 */
export const fetchAddToDo = async (date: string, content: string) => {
  const endpoint = LIP_URL.API.TODO.ADD_TODO;
  const params = {
    content,
    date,
  };

  const { data: axiosData } = await LifeIsPlanClient.post<IRequestAddToDoParams, IResponseLIPFormat<IToDoData>>(
    endpoint,
    params,
  );
  const { data, status } = axiosData;

  if (isFetchFailure(status)) {
    throw new Error("Fetch failure add todo..");
  }

  return data;
};
