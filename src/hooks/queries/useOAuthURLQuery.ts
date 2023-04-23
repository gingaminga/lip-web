import { fetchGetOAuthURL } from "@/utils/api/lip/fetchGetOAuthURL";
import { QUERY_KEY } from "@/utils/query-key";
import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";
import type { TAxiosError } from "axios-classification";

export default function useOAuthURLQuery(type: string, options?: UseQueryOptions<string, TAxiosError>) {
  return useQuery<string, TAxiosError>(QUERY_KEY.LIP.GET_OAUTH_URL(type), () => fetchGetOAuthURL(type), options);
}
