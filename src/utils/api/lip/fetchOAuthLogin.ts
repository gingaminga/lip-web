import type { IResponseLIPFormat } from "@/types/common";
import { checkOAuthType, isFetchFailure } from "@/types/guard";
import type { TOAuthType } from "@/types/oauth";
import type { IUserData } from "@/types/user";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";
import constants from "@/utils/constants";
import Cookie from "@/utils/cookie";
import { logger } from "@/utils/logger";

export interface IRequestOAuthLoginParams {
  code: string; // 인가코드
  type: TOAuthType;
}

export interface IOAuthLoginData {
  accessToken: string;
  refreshToken: string;
  userInfo: IUserData;
}

/**
 * @description OAuth 로그인(회원가입)하기
 */
export const fetchOAuthLogin = async (type: string, code: string) => {
  if (!checkOAuthType(type)) {
    throw new Error("OAuth type is valid..");
  }

  const endpoint = LIP_URL.API.OAUTH.LOGIN;
  const params = {
    code,
    type,
  };

  logger.log("Request oauth login", endpoint, params);

  const { data: axiosData } = await LifeIsPlanClient.post<
    IRequestOAuthLoginParams,
    IResponseLIPFormat<IOAuthLoginData>
  >(endpoint, params);
  const { data, status } = axiosData;
  logger.log("Response oauth login", axiosData);

  if (isFetchFailure(status)) {
    throw new Error("Fetch failure get oauth url..");
  }

  const cookieOption = {
    domain: constants.LIP.DOMAIN,
  };

  Cookie.setCookie("access_token", data.accessToken, cookieOption);
  Cookie.setCookie("refresh_token", data.refreshToken, cookieOption);

  return data.userInfo;
};
