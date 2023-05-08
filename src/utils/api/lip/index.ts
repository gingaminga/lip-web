import { LIP_URL } from "@/utils/api/url";
import { AxiosBase } from "axios-classification";

export const LifeIsPlanClient = new AxiosBase({
  baseURL: LIP_URL.API.HOST,
});
