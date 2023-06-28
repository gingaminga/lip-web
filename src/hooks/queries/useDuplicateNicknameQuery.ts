import { fetchDuplicateNickname } from "@/utils/api/lip/fetchDuplicateNickname";
import { QUERY_KEY } from "@/utils/query-key";
import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";
import type { TAxiosError } from "axios-classification";

export default function useDuplicateNicknameQuery(nickname: string, options?: UseQueryOptions<boolean, TAxiosError>) {
  return useQuery<boolean, TAxiosError>(
    QUERY_KEY.LIP.DUPLICATE_NICKNAME(nickname),
    () => fetchDuplicateNickname(nickname),
    options,
  );
}
