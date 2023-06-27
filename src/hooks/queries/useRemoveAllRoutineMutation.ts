import { fetchRemoveAllRoutine } from "@/utils/api/lip/fetchRemoveAllRoutine";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import type { TAxiosError } from "axios-classification";

export default function useRemoveAllRoutineMutation(options?: UseMutationOptions<boolean, TAxiosError>) {
  return useMutation<boolean, TAxiosError>(fetchRemoveAllRoutine, options);
}
