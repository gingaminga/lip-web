import { fetchRemoveToDo, IRequestRemoveToDoParams } from "@/utils/api/lip/fetchRemoveToDo";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import type { TAxiosError } from "axios-classification";

export default function useRemoveToDoMutation(
  options?: UseMutationOptions<boolean, TAxiosError, IRequestRemoveToDoParams, unknown>,
) {
  return useMutation<boolean, TAxiosError, IRequestRemoveToDoParams>(({ id }) => fetchRemoveToDo(id), options);
}
