import useReissueTokenMutation from "@/hooks/queries/useReissueTokenMutation";
import useUser from "@/hooks/useUser";
import Cookie from "@/utils/cookie";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NOT_LOGIN_PATH_NAME = ["/login", "/callback/[oauth]"];

/**
 * @description 토큰 발급받는 hook
 */
export default function useRegisterToken() {
  const { pathname } = useRouter();
  const [token, setToken] = useState("");
  const { isLogin, saveUserInfo } = useUser();
  const { isLoading, mutate } = useReissueTokenMutation({
    onSuccess: (users) => {
      saveUserInfo(users);

      const path = NOT_LOGIN_PATH_NAME.includes(pathname) ? "/" : pathname;
      Router.push(path);
    },
  });

  /**
   * @description access token 발급받기
   */
  useEffect(() => {
    if (!isLogin && token) {
      mutate({
        refreshToken: token,
      });
    }
  }, [isLogin, mutate, token]);

  useEffect(() => {
    const refreshToken = Cookie.getCookie("refresh_token");

    if (refreshToken) {
      setToken(refreshToken);
    }
  }, []);

  return {
    isLoadingReissueToken: isLoading,
  };
}
