import type { IResponseLIPFormat } from "@/types/common";
import { checkOAuthType, isFetchFailure } from "@/types/guard";
import type { TOAuthType } from "@/types/oauth";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";

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

  const endpoint = LIP_URL.API.AUTH.GET_URL;
  const params = {
    type,
  };

  const { data: axiosData } = await LifeIsPlanClient.get<IRequestGetOAuthURLParams, IResponseLIPFormat<IOAuthURLData>>(
    endpoint,
    params,
  );
  const { data, status } = axiosData;

  if (isFetchFailure(status)) {
    throw new Error("Fetch failure get oauth url..");
  }

  return data.url;
};
