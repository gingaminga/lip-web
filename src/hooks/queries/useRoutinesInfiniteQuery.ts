import { IRoutineData } from "@/types/routine";
import { fetchGetRoutines } from "@/utils/api/lip/fetchGetRoutines";
import { QUERY_KEY } from "@/utils/query-key";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { UseInfiniteQueryOptions } from "@tanstack/react-query";
import type { TAxiosError } from "axios-classification";

export default function useRoutinesInfiniteQuery(
  options?: UseInfiniteQueryOptions<IRoutineData[], TAxiosError>,
  limit = 30,
) {
  return useInfiniteQuery<IRoutineData[], TAxiosError>(
    QUERY_KEY.LIP.GET_ROUTINES(limit),
    ({ pageParam }) => {
      const routineID = pageParam ?? -1;
      return fetchGetRoutines(routineID, limit);
    },
    options,
  );
}
