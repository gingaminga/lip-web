import type { IResponseLIPFormat } from "@/types/common";
import { isFetchFailure } from "@/types/guard";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";
import constants from "@/utils/constants";
import Cookie from "@/utils/cookie";

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

  const cookieOption = {
    domain: constants.LIP.DOMAIN,
  };

  Cookie.removeCookie("refresh_token", cookieOption);

  return true;
};
