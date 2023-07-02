import type { IResponseLIPFormat } from "@/types/common";
import { isFetchFailure } from "@/types/guard";
import { IRouTineToDoData, IToDoData } from "@/types/todo";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";

export interface IRequestGetToDosParams {
  date: string;
}

export interface IResponseGetToDos {
  routineTodos: IRouTineToDoData[];
  todos: IToDoData[];
}

/**
 * @description 할 일들 가져오기
 * @param date 날짜
 * YYYYMM - 월별
 * YYYYMMDD - 일별
 */
export const fetchGetToDos = async (date: string) => {
  const endpoint = LIP_URL.API.TODO.GET_TODO;
  const params = {
    date,
  };

  const { data: axiosData } = await LifeIsPlanClient.get<IRequestGetToDosParams, IResponseLIPFormat<IResponseGetToDos>>(
    endpoint,
    params,
  );
  const { data, status } = axiosData;

  if (isFetchFailure(status)) {
    throw new Error("Fetch failure get todos..");
  }

  return data;
};
