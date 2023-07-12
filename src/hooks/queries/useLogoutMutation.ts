import { fetchLogout, IRequestLogoutParams } from "@/utils/api/lip/fetchLogout";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import type { TAxiosError } from "axios-classification";

export default function useLogoutMutation(options?: UseMutationOptions<boolean, TAxiosError, IRequestLogoutParams>) {
  return useMutation<boolean, TAxiosError, IRequestLogoutParams>(
    ({ deviceToken }) => fetchLogout(deviceToken),
    options,
  );
}
