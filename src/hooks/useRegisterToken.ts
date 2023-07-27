import useReissueTokenMutation from "@/hooks/queries/useReissueTokenMutation";
import useUser from "@/hooks/useUser";
import { NOT_LOGIN_PATH_COFNIG, ROUTER_PATH } from "@/utils/config";
import Cookie from "@/utils/cookie";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

/**
 * @description 토큰 발급받는 hook
 */
export default function useRegisterToken() {
  const { pathname, query } = useRouter();
  const [token, setToken] = useState("");
  const { isLogin, saveUserInfo } = useUser();
  const { isLoading, mutate } = useReissueTokenMutation({
    onSuccess: (users) => {
      saveUserInfo(users);

      const path = NOT_LOGIN_PATH_COFNIG.includes(pathname) ? ROUTER_PATH.TODO : pathname;
      Router.push({
        pathname: path,
        query,
      });
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

    if (refreshToken && token !== refreshToken) {
      setToken(refreshToken);
    }
  }, [token]);

  return {
    isLoadingReissueToken: isLoading,
  };
}
