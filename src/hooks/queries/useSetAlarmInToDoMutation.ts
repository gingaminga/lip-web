import { fetchSetAlarmInToDo, IRequestSetAlarmInToDoParams } from "@/utils/api/lip/fetchSetAlarmInToDo";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import type { TAxiosError } from "axios-classification";

export default function useSetAlarmInToDoMutation(
  options?: UseMutationOptions<boolean, TAxiosError, IRequestSetAlarmInToDoParams, unknown>,
) {
  return useMutation<boolean, TAxiosError, IRequestSetAlarmInToDoParams>(
    ({ alarmHour, alarmMinute, id }) => fetchSetAlarmInToDo(id, alarmHour, alarmMinute),
    options,
  );
}
