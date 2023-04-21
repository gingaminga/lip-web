import { RESPONSE_STATUS } from "@/utils/api/lip/response";

/**
 * @description API 요청 실패 여부 확인
 * @param status API STATUS 값
 */
export function isFetchFailure(status: RESPONSE_STATUS) {
  return status === RESPONSE_STATUS.FAILURE;
}
