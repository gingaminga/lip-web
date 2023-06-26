import { IRoutineData } from "@/types/routine";
import { fetchGetDetailRoutine } from "@/utils/api/lip/fetchGetDetailRoutine";
import { QUERY_KEY } from "@/utils/query-key";
import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";
import type { TAxiosError } from "axios-classification";

export default function useDetailRoutineQuery(id: number, options?: UseQueryOptions<IRoutineData, TAxiosError>) {
  return useQuery<IRoutineData, TAxiosError>(
    QUERY_KEY.LIP.GET_DETAIL_ROUTINE(id),
    () => fetchGetDetailRoutine(id),
    options,
  );
}
