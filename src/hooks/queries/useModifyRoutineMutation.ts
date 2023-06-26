import { fetchModifyRoutine, IRequestModifyRoutineParams } from "@/utils/api/lip/fetchModifyRoutine";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import type { TAxiosError } from "axios-classification";

export default function useModifyRoutineMutation(
  options?: UseMutationOptions<boolean, TAxiosError, IRequestModifyRoutineParams, unknown>,
) {
  return useMutation<boolean, TAxiosError, IRequestModifyRoutineParams>(
    ({ alarm_hour: alarmHour, alarm_minute: alarmMinute, color, content, days, id }) =>
      fetchModifyRoutine(id, content, days, color, alarmHour, alarmMinute),
    options,
  );
}
