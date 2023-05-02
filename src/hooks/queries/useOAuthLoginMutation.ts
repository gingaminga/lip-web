import type { IUserData } from "@/types/user";
import { fetchOAuthLogin, IRequestOAuthLoginParams } from "@/utils/api/lip/fetchOAuthLogin";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import type { TAxiosError } from "axios-classification";

export default function useOAuthLoginMutation(
  options?: UseMutationOptions<IUserData, TAxiosError, IRequestOAuthLoginParams, unknown>,
) {
  return useMutation<IUserData, TAxiosError, IRequestOAuthLoginParams>(
    ({ code, type }) => fetchOAuthLogin(type, code),
    options,
  );
}
