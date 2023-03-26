import { fetchGetActivity, IResponseActivityData } from "@/utils/api/bored/util";
import { QUERY_KEY } from "@/utils/query-key";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { IAxiosError } from "axios-classification";

export default function useGetActivityQuery(options?: UseQueryOptions<IResponseActivityData, IAxiosError>) {
  return useQuery<IResponseActivityData, IAxiosError>(QUERY_KEY.BORED.GET_ACTIVITY, fetchGetActivity, options);
}
