import type { IResponseLIPFormat } from "@/types/common";
import { checkOAuthType, isFetchFailure } from "@/types/guard";
import type { TOAuthType } from "@/types/oauth";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";
import { logger } from "@/utils/logger";

interface IRequestGetOAuthURLParams {
  type: TOAuthType;
}

export interface IOAuthURLData {
  url: string;
}

/**
 * @description OAuth url 가져오기
 */
export const fetchGetOAuthURL = async (type: string) => {
  if (!checkOAuthType(type)) {
    throw new Error("OAuth type is valid..");
  }

  const endpoint = LIP_URL.API.OAUTH.GET_URL;
  const params = {
    type,
  };

  logger.log("Request get oauth url", endpoint, params);

  const { data: axiosData } = await LifeIsPlanClient.get<IRequestGetOAuthURLParams, IResponseLIPFormat<IOAuthURLData>>(
    endpoint,
    params,
  );
  const { data, status } = axiosData;
  logger.log("Response get oauth url", axiosData);

  if (isFetchFailure(status)) {
    throw new Error("Fetch failure get oauth url..");
  }

  return data.url;
};
