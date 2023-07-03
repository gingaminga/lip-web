import { fetchCheckRoutineToDo, IRequestCheckRoutineToDoParams } from "@/utils/api/lip/fetchCheckRoutineToDo";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import type { TAxiosError } from "axios-classification";

export default function useCheckRoutineToDoMutation(
  options?: UseMutationOptions<boolean, TAxiosError, IRequestCheckRoutineToDoParams, unknown>,
) {
  return useMutation<boolean, TAxiosError, IRequestCheckRoutineToDoParams>(
    ({ checked, date, id }) => fetchCheckRoutineToDo(id, date, checked),
    options,
  );
}
