import { TRoutineColor } from "@/types/color";
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

/**
 * @description 루틴 색상 종류인지 체크
 * @param color
 */
export function checkRoutineColor(color: string): color is TRoutineColor {
  const routineColors = [
    "bg-slate-300",
    "bg-stone-300",
    "bg-rose-300",
    "bg-orange-300",
    "bg-amber-300",
    "bg-lime-300",
    "bg-emerald-300",
    "bg-sky-300",
    "bg-indigo-300",
    "bg-violet-300",
    "bg-purple-300",
  ];
  return routineColors.includes(color);
}
