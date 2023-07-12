import { fetchChangeNickname, IRequestChangeNicknameParams } from "@/utils/api/lip/fetchChangeNickname";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import type { TAxiosError } from "axios-classification";

export default function useChangeNicknameMutation(
  options?: UseMutationOptions<boolean, TAxiosError, IRequestChangeNicknameParams, unknown>,
) {
  return useMutation<boolean, TAxiosError, IRequestChangeNicknameParams>(
    ({ deviceToken, nickname }) => fetchChangeNickname(nickname, deviceToken),
    options,
  );
}
