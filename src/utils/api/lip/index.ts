import { LIP_URL } from "@/utils/api/url";
import { logger } from "@/utils/logger";
import { AxiosBase } from "axios-classification";

export const LifeIsPlanClient = new AxiosBase({
  baseURL: LIP_URL.API.HOST,
});

LifeIsPlanClient.setRequestInterceptor(
  (request) => {
    const { baseURL, data, url } = request;

    logger.log(`Request ${baseURL}${url}`, data);

    return request;
  },
  (error) => {
    logger.error(error);

    throw error;
  },
);

LifeIsPlanClient.setResponseInterceptor(
  (response) => {
    const { data, config } = response;
    const { baseURL, url } = config;

    logger.log(`Response ${baseURL}${url}`, data);

    return response;
  },
  (error) => {
    logger.error(error);

    throw error;
  },
);
