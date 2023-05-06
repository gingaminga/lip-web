import type { IUserData } from "@/types/user";
import { fetchLogin, IRequestLoginParams } from "@/utils/api/lip/fetchLogin";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import type { TAxiosError } from "axios-classification";

export default function useLoginMutation(
  options?: UseMutationOptions<IUserData, TAxiosError, IRequestLoginParams, unknown>,
) {
  return useMutation<IUserData, TAxiosError, IRequestLoginParams>(({ code, type }) => fetchLogin(type, code), options);
}
