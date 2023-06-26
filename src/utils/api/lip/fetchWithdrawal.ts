import type { IResponseLIPFormat } from "@/types/common";
import { isFetchFailure } from "@/types/guard";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";
import Cookie, { REFRESH_TOKEN_COOKIE_OPTION } from "@/utils/cookie";

/**
 * @description 회원 탈퇴하기
 */
export const fetchWithdrawal = async () => {
  const endpoint = LIP_URL.API.USER.WITHDRAWAL;

  const { data: axiosData } = await LifeIsPlanClient.delete<undefined, IResponseLIPFormat<boolean>>(endpoint);
  const { data, status } = axiosData;

  if (isFetchFailure(status) || !data) {
    throw new Error("Fetch failure withdrawal..");
  }

  Cookie.removeCookie("refresh_token", REFRESH_TOKEN_COOKIE_OPTION);

  return data;
};
