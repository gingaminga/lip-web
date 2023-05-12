import { RESPONSE_STATUS } from "@/utils/api/lip/response";

export interface IResponseLIPFormat<T> {
  data: T;
  status: RESPONSE_STATUS;
}

export interface ICommonProps {
  isLogin: boolean;
}
