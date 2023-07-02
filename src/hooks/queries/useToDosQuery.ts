import { IResponseGetToDos, fetchGetToDos } from "@/utils/api/lip/fetchGetToDos";
import { QUERY_KEY } from "@/utils/query-key";
import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";
import type { TAxiosError } from "axios-classification";

export default function useToDosQuery(date: string, options?: UseQueryOptions<IResponseGetToDos, TAxiosError>) {
  return useQuery<IResponseGetToDos, TAxiosError>(QUERY_KEY.LIP.GET_TODOS(date), () => fetchGetToDos(date), options);
}
