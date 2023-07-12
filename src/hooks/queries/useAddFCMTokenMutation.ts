import { fetchAddFCMToken, IRequestAddFCMTokenParams } from "@/utils/api/lip/fetchAddFCMToken";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import type { TAxiosError } from "axios-classification";

export default function useAddFCMTokenMutation(
  options?: UseMutationOptions<boolean, TAxiosError, IRequestAddFCMTokenParams, unknown>,
) {
  return useMutation<boolean, TAxiosError, IRequestAddFCMTokenParams>(({ token }) => fetchAddFCMToken(token), options);
}
