import type { IResponseLIPFormat } from "@/types/common";
import { checkOAuthType, isFetchFailure } from "@/types/guard";
import type { TOAuthType } from "@/types/oauth";
import type { IUserData } from "@/types/user";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";
import Cookie, { REFRESH_TOKEN_COOKIE_OPTION } from "@/utils/cookie";

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

  const { data: axiosData } = await LifeIsPlanClient.post<IRequestLoginParams, IResponseLIPFormat<ILoginData>>(
    endpoint,
    params,
  );
  const { data, status } = axiosData;

  if (isFetchFailure(status)) {
    throw new Error("Fetch failure get oauth url..");
  }

  Cookie.setCookie("refresh_token", data.refreshToken, REFRESH_TOKEN_COOKIE_OPTION);

  LifeIsPlanClient.setBearerToken(data.accessToken);

  return data.userInfo;
};
