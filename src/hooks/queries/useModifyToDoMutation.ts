import { fetchModifyToDo, IRequestModifyToDoParams } from "@/utils/api/lip/fetchModifyToDo";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import type { TAxiosError } from "axios-classification";

export default function useModifyToDoMutation(
  options?: UseMutationOptions<boolean, TAxiosError, IRequestModifyToDoParams, unknown>,
) {
  return useMutation<boolean, TAxiosError, IRequestModifyToDoParams>(
    ({ content, id }) => fetchModifyToDo(id, content),
    options,
  );
}
