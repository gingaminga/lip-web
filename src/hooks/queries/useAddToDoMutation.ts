import type { IToDoData } from "@/types/todo";
import { fetchAddToDo, IRequestAddToDoParams } from "@/utils/api/lip/fetchAddToDo";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import type { TAxiosError } from "axios-classification";

export default function useAddToDoMutation(
  options?: UseMutationOptions<IToDoData, TAxiosError, IRequestAddToDoParams, unknown>,
) {
  return useMutation<IToDoData, TAxiosError, IRequestAddToDoParams>(
    ({ content, date }) => fetchAddToDo(date, content),
    options,
  );
}
