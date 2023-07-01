import { IRoutineData } from "@/types/routine";
import { fetchAddRoutine, IRequestAddRoutineParams } from "@/utils/api/lip/fetchAddRoutine";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import type { TAxiosError } from "axios-classification";

export default function useAddRoutineMutation(
  options?: UseMutationOptions<IRoutineData, TAxiosError, IRequestAddRoutineParams, unknown>,
) {
  return useMutation<IRoutineData, TAxiosError, IRequestAddRoutineParams>(
    ({ alarmHour, alarmMinute, color, content, days }) => fetchAddRoutine(content, days, color, alarmHour, alarmMinute),
    options,
  );
}
