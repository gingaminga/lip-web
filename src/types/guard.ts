import type { TOAuthType } from "@/types/oauth";
import { RESPONSE_STATUS } from "@/utils/api/lip/response";

/**
 * @description API 요청 실패 여부 확인
 * @param status API STATUS 값
 */
export function isFetchFailure(status: RESPONSE_STATUS) {
  return status === RESPONSE_STATUS.FAILURE;
}

/**
 * @description OAuth 종류인지 체크
 * @param type
 */
export function checkOAuthType(type: string): type is TOAuthType {
  return !!type;
}
