import useUser from "@/hooks/useUser";
import { NOT_LOGIN_PATH_NAME } from "@/utils/constants";
import Cookie from "@/utils/cookie";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

/**
 * @description 레이아웃 표시 여부 hook
 */
export default function useVisibleLayout() {
  const { pathname } = useRouter();
  const { isLogin } = useUser();
  const [isRenderLoadingOverlay, setRenderLoadingOverlay] = useState(true);

  /**
   * @description 로딩 화면 활성/비활성 여부 체크하기
   */
  useEffect(() => {
    const refreshToken = Cookie.getCookie("refresh_token");

    if (NOT_LOGIN_PATH_NAME.includes(pathname)) {
      // 로그인이 되지 않아야 하는 페이지
      if (!isLogin && !refreshToken) {
        setRenderLoadingOverlay(false);
      }

      return;
    }

    // 로그인이 되어야하는 페이지
    if (!refreshToken) {
      Router.push("/login");

      return;
    }

    if (isLogin) {
      setRenderLoadingOverlay(false);
    }
  }, [isLogin, pathname]);

  return {
    isRenderLoadingOverlay,
  };
}
