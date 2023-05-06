import type { IResponseLIPFormat } from "@/types/common";
import { checkOAuthType, isFetchFailure } from "@/types/guard";
import type { TOAuthType } from "@/types/oauth";
import type { IUserData } from "@/types/user";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";
import constants from "@/utils/constants";
import Cookie from "@/utils/cookie";
import { logger } from "@/utils/logger";

export interface IRequestLoginParams {
  code: string; // 인가코드
  type: TOAuthType;
}

export interface ILoginData {
  accessToken: string;
  refreshToken: string;
  userInfo: IUserData;
}

/**
 * @description 로그인(회원가입)하기
 */
export const fetchLogin = async (type: string, code: string) => {
  if (!checkOAuthType(type)) {
    throw new Error("OAuth type is valid..");
  }

  const endpoint = LIP_URL.API.USER.LOGIN;
  const params = {
    code,
    type,
  };

  logger.log("Request oauth login", endpoint, params);

  const { data: axiosData } = await LifeIsPlanClient.post<IRequestLoginParams, IResponseLIPFormat<ILoginData>>(
    endpoint,
    params,
  );
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
