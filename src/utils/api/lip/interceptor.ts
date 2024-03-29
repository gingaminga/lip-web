import { logger } from "@/utils/logger";
import { IResponseLIPFormat } from "@/types/common";
import { LifeIsPlanClient } from "@/utils/api/lip";
import { fetchReissueToken } from "@/utils/api/lip/fetchReissueToken";
import { ROUTER_PATH } from "@/utils/config";
import Cookie, { REFRESH_TOKEN_COOKIE_OPTION } from "@/utils/cookie";
import Router from "next/router";

LifeIsPlanClient.setRequestInterceptor(
  (request) => {
    const { baseURL, params, url } = request;

    logger.log(`Request ${baseURL}${url}`, params);

    return request;
  },
  (error) => {
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
  async (error) => {
    if (!LifeIsPlanClient.isAxiosError<IResponseLIPFormat<string>>(error)) {
      throw error;
    }

    const { config, response } = error;

    if (response?.status === 401) {
      // 토큰 만료
      const { data: axiosData } = response;

      const message = axiosData.data.toLowerCase();

      if (message.includes("access")) {
        try {
          const refreshToken = Cookie.getCookie("refresh_token");

          await fetchReissueToken(refreshToken);

          if (config) {
            // 기존 값을 가지고 있기 때문에, 강제 재설정
            config.headers.Authorization = LifeIsPlanClient.getDefaultConfigOfInstance().headers.common.Authorization;

            // 기존 요청 재처리
            await LifeIsPlanClient.request(config);
          }
        } catch (error1) {
          /** empty */
        }

        return;
      }

      if (message.includes("refresh")) {
        // 리프레시 토큰일 경우 쿠키 삭제 후 로그인 화면으로 이동
        Cookie.removeCookie("refresh_token", REFRESH_TOKEN_COOKIE_OPTION);
        Router.push(ROUTER_PATH.LOGIN);
      }
    }

    throw error;
  },
);
