import CommonTemplate from "@/components/common/templates/CommonTemplate";
import OAuthLoginForm from "@/components/form/OAuthLoginForm";
import useOAuthURLQuery from "@/hooks/queries/useOAuthURLQuery";
import type { ICommonProps } from "@/types/common";
import Head from "next/head";
import { useState } from "react";

export type TChangeOAuthType = (type: string) => void;

type TLoginPage = ICommonProps;

export default function LoginPage({ isLogin }: TLoginPage) {
  const [oAuthType, setOAuthType] = useState<string>("");
  useOAuthURLQuery(oAuthType, {
    enabled: !!oAuthType,
    onSuccess: (url) => {
      document.location.href = url;
    },
  });

  /**
   * @description oauth 종류 변경하기
   * @param type oauth 종류
   */
  const changeOAuthType = (type: string) => {
    setOAuthType(type);
  };

  return (
    <>
      <Head>
        <title>life is plan</title>
      </Head>
      <CommonTemplate isLogin={isLogin}>
        <div className="hero-content flex-col w-full">
          <OAuthLoginForm onClick={changeOAuthType} />
        </div>
      </CommonTemplate>
    </>
  );
}
