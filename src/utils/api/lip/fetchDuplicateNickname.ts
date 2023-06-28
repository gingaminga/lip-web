import type { IResponseLIPFormat } from "@/types/common";
import { isFetchFailure } from "@/types/guard";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { LIP_URL } from "@/utils/api/url";

interface IRequestDuplicateNicknameParams {
  nickname: string;
}

/**
 * @description 닉네임 중복 여부 확인하기
 * @param nickname 닉네임
 */
export const fetchDuplicateNickname = async (nickname: string) => {
  const endpoint = LIP_URL.API.USER.DUPLICATE_NICKNAME;
  const params = {
    nickname,
  };

  const { data: axiosData } = await LifeIsPlanClient.get<IRequestDuplicateNicknameParams, IResponseLIPFormat<boolean>>(
    endpoint,
    params,
  );
  const { data, status } = axiosData;

  if (isFetchFailure(status)) {
    throw new Error("Fetch failure duplicate nickname..");
  }

  return data;
};
