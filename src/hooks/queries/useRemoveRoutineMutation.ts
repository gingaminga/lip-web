import { fetchRemoveRoutine, IRequestRemoveRoutineParams } from "@/utils/api/lip/fetchRemoveRoutine";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import type { TAxiosError } from "axios-classification";

export default function useRemoveRoutineMutation(
  options?: UseMutationOptions<boolean, TAxiosError, IRequestRemoveRoutineParams, unknown>,
) {
  return useMutation<boolean, TAxiosError, IRequestRemoveRoutineParams>(({ id }) => fetchRemoveRoutine(id), options);
}
