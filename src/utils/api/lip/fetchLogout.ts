import type { IResponseLIPFormat } from "@/types/common";
import { isFetchFailure } from "@/types/guard";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";
import Cookie, { REFRESH_TOKEN_COOKIE_OPTION } from "@/utils/cookie";

export interface IRequestLogoutParams {
  deviceToken: string;
}

/**
 * @description 로그아웃하기
 * @param token 디바이스 토큰
 */
export const fetchLogout = async (token: string) => {
  const endpoint = LIP_URL.API.USER.LOGOUT;

  const params = {
    deviceToken: token,
  };

  const { data: axiosData } = await LifeIsPlanClient.post<IRequestLogoutParams, IResponseLIPFormat<boolean>>(
    endpoint,
    params,
  );
  const { status } = axiosData;

  if (isFetchFailure(status)) {
    throw new Error("Fetch failure logout..");
  }

  Cookie.removeCookie("refresh_token", REFRESH_TOKEN_COOKIE_OPTION);

  return true;
};
