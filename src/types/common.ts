import { RESPONSE_STATUS } from "@/utils/api/lip/response";
import { RefObject } from "react";

export interface IResponseLIPFormat<T> {
  data: T;
  status: RESPONSE_STATUS;
}

export interface ICommonProps {
  isLogin: boolean;
}

export type TElementRefItem<T> = ((instance: T | null) => void) | RefObject<T>;

export interface IDynamicJSON<T> {
  [key: string]: T;
}

export interface IValidationData {
  message: string;
  status: boolean;
}
