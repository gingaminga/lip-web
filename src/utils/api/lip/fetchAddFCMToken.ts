import type { IResponseLIPFormat } from "@/types/common";
import { isFetchFailure } from "@/types/guard";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";

export interface IRequestAddFCMTokenParams {
  token: string;
}

/**
 * @description FCM 토큰 추가하기
 * @param token 디바이스 토큰
 * @returns true / false
 */
export const fetchAddFCMToken = async (token: string) => {
  const endpoint = LIP_URL.API.NOTIFICATION.ADD_FCM_TOKEN;
  const params = {
    token,
  };

  const { data: axiosData } = await LifeIsPlanClient.post<IRequestAddFCMTokenParams, IResponseLIPFormat<boolean>>(
    endpoint,
    params,
  );
  const { data, status } = axiosData;

  if (isFetchFailure(status)) {
    throw new Error("Fetch failure add FCM token..");
  }

  return data;
};
