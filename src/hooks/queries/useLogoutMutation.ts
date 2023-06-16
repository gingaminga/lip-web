import { fetchLogout } from "@/utils/api/lip/fetchLogout";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import type { TAxiosError } from "axios-classification";

export default function useLogoutMutation(options?: UseMutationOptions<boolean, TAxiosError>) {
  return useMutation<boolean, TAxiosError>(fetchLogout, options);
}
