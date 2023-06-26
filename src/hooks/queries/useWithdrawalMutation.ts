import { fetchWithdrawal } from "@/utils/api/lip/fetchWithdrawal";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import type { TAxiosError } from "axios-classification";

export default function useWithdrawalMutation(options?: UseMutationOptions<boolean, TAxiosError>) {
  return useMutation<boolean, TAxiosError>(fetchWithdrawal, options);
}
