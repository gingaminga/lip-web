import useOAuthLoginMutation from "@/hooks/queries/useOAuthLoginMutation";
import useUser from "@/hooks/useUser";
import { checkOAuthType } from "@/types/guard";
import { OAUTH_LOGIN_CONFIG } from "@/utils/config";
import Router from "next/router";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  const paths = OAUTH_LOGIN_CONFIG.map((oAuthConfig) => ({
    params: {
      oauth: oAuthConfig.type,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

/**
 * @description OAuth 콜백 페이지 컴포넌트
 */
export default function OAuthCallbackPage() {
  const [oAuthInfo, setOAuthInfo] = useState({
    code: "",
    type: "",
  });
  const { saveUserInfo } = useUser();
  const { mutate } = useOAuthLoginMutation({
    onSuccess: (userInfo) => {
      saveUserInfo(userInfo);

      Router.push("/");
    },
  });

  /**
   * @description 인가코드와 oauth 종류를 상태 저장하기
   */
  useEffect(() => {
    const Address = new URL(window.location.href);

    const oAuthType = Address.pathname.split("/")[2];
    const code = Address.searchParams.get("code") || "";

    setOAuthInfo({
      code,
      type: oAuthType,
    });
  }, [mutate]);

  useEffect(() => {
    const { code, type } = oAuthInfo;

    if (checkOAuthType(type) && code) {
      mutate({
        code,
        type,
      });
    }
  }, [mutate, oAuthInfo]);
}
