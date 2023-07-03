import { fetchCheckToDo, IRequestCheckToDoParams } from "@/utils/api/lip/fetchCheckToDo";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import type { TAxiosError } from "axios-classification";

export default function useCheckToDoMutation(
  options?: UseMutationOptions<boolean, TAxiosError, IRequestCheckToDoParams, unknown>,
) {
  return useMutation<boolean, TAxiosError, IRequestCheckToDoParams>(
    ({ checked, id }) => fetchCheckToDo(id, checked),
    options,
  );
}
