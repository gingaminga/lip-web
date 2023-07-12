import type { IResponseLIPFormat } from "@/types/common";
import { isFetchFailure } from "@/types/guard";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";

export interface IRequestChangeNicknameParams {
  deviceToken: string;
  nickname: string;
}

/**
 * @description 닉네임 변경하기
 * @param nickname 닉네임
 * @param token 디바이스 토큰
 */
export const fetchChangeNickname = async (nickname: string, token: string) => {
  const endpoint = LIP_URL.API.USER.CHANGE_NICKNAME;
  const params = {
    deviceToken: token,
    nickname,
  };

  const { data: axiosData } = await LifeIsPlanClient.patch<IRequestChangeNicknameParams, IResponseLIPFormat<boolean>>(
    endpoint,
    params,
  );
  const { data, status } = axiosData;

  if (isFetchFailure(status)) {
    throw new Error("Fetch failure change nickname..");
  }

  return data;
};
