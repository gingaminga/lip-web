import type { IResponseLIPFormat } from "@/types/common";
import { isFetchFailure } from "@/types/guard";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";
import Cookie, { REFRESH_TOKEN_COOKIE_OPTION } from "@/utils/cookie";

/**
 * @description 로그아웃하기
 */
export const fetchLogout = async () => {
  const endpoint = LIP_URL.API.USER.LOGOUT;

  const { data: axiosData } = await LifeIsPlanClient.post<undefined, IResponseLIPFormat<boolean>>(endpoint);
  const { status } = axiosData;

  if (isFetchFailure(status)) {
    throw new Error("Fetch failure logout..");
  }

  Cookie.removeCookie("refresh_token", REFRESH_TOKEN_COOKIE_OPTION);

  return true;
};
