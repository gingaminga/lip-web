import constants from "@/utils/constants";
import dayjs from "dayjs";
import Cookies, { CookieAttributes } from "js-cookie";

export const REFRESH_TOKEN_COOKIE_OPTION = {
  domain: constants.LIP.DOMAIN,
  expires: dayjs().add(3, "day").toDate(),
};

export default class Cookie {
  /**
   * @description 쿠키 설정하기
   * @param name
   * @param value
   * @param options
   */
  static setCookie(name: string, value: string, options?: CookieAttributes) {
    const { expires = 1000 * 24 * 60 * 60, ...rest } = options || {};

    const newOptions = {
      ...rest,
      expires,
    };

    const response = Cookies.set(name, value, newOptions);

    return !!response;
  }

  /**
   * @description 쿠키 가져오기
   * @param name
   */
  static getCookie(name: string) {
    return Cookies.get(name) || "";
  }

  /**
   * @description 쿠키 삭제하기
   * @param name
   */
  static removeCookie(name: string, options?: CookieAttributes) {
    Cookies.remove(name, options);

    return true;
  }
}
