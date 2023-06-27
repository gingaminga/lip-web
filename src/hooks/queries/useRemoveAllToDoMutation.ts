import { fetchRemoveAllToDo } from "@/utils/api/lip/fetchRemoveAllToDo";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import type { TAxiosError } from "axios-classification";

export default function useRemoveAllToDoMutation(options?: UseMutationOptions<boolean, TAxiosError>) {
  return useMutation<boolean, TAxiosError>(fetchRemoveAllToDo, options);
}
