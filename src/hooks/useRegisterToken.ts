import useReissueTokenMutation from "@/hooks/queries/useReissueTokenMutation";
import useUser from "@/hooks/useUser";
import Cookie from "@/utils/cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/**
 * @description 토큰 발급받는 hook
 */
export default function useRegisterToken() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const { isLogin, saveUserInfo } = useUser();
  const { mutate } = useReissueTokenMutation({
    onSuccess: (users) => {
      saveUserInfo(users);

      router.push("/");
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
}
