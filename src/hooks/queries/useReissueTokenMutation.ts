import type { IUserData } from "@/types/user";
import { fetchReissueToken, IRequestReissueTokenParams } from "@/utils/api/lip/fetchReissueToken";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import type { TAxiosError } from "axios-classification";

export default function useReissueTokenMutation(
  options?: UseMutationOptions<IUserData, TAxiosError, IRequestReissueTokenParams, unknown>,
) {
  return useMutation<IUserData, TAxiosError, IRequestReissueTokenParams>(
    ({ refreshToken }) => fetchReissueToken(refreshToken),
    options,
  );
}
