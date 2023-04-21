import { LIP_URL } from "@/utils/api/url";
import { AxiosBase } from "axios-classification";

class LifeIsPlan extends AxiosBase {}

export const LifeIsPlanClient = new LifeIsPlan({
  baseURL: LIP_URL.API.HOST,
});
