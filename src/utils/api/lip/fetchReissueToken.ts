import type { IResponseLIPFormat } from "@/types/common";
import { isFetchFailure } from "@/types/guard";
import type { IUserData } from "@/types/user";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";
import Cookie, { REFRESH_TOKEN_COOKIE_OPTION } from "@/utils/cookie";

export interface IRequestReissueTokenParams {
  refreshToken: string;
}

export interface IReissueTokenData {
  accessToken: string;
  refreshToken: string;
  userInfo: IUserData;
}

/**
 * @description 토큰 재발급하기
 * @param token refresh token
 */
export const fetchReissueToken = async (token: string) => {
  const endpoint = LIP_URL.API.AUTH.REISSUE_TOKEN;
  const params = {
    refreshToken: token,
  };

  const { data: axiosData } = await LifeIsPlanClient.post<
    IRequestReissueTokenParams,
    IResponseLIPFormat<IReissueTokenData>
  >(endpoint, params);
  const { data, status } = axiosData;

  if (isFetchFailure(status)) {
    throw new Error("Fetch failure reissue token..");
  }

  Cookie.setCookie("refresh_token", data.refreshToken, REFRESH_TOKEN_COOKIE_OPTION);

  LifeIsPlanClient.setBearerToken(data.accessToken);

  return data.userInfo;
};
