import CommonTemplate from "@/components/common/templates/CommonTemplate";
import HeaderTemplate from "@/components/common/templates/HeaderTemplate";
import OAuthLoginForm from "@/components/login/OAuthLoginForm";
import useOAuthURLQuery from "@/hooks/queries/useOAuthURLQuery";
import type { ICommonProps } from "@/types/common";
import constants from "@/utils/constants";
import { useState } from "react";

export type TChangeOAuthType = (type: string) => void;

type TLoginPage = ICommonProps;

export default function LoginPage({ isLoadingReissueToken, isLogin, isRenderLoadingOverlay }: TLoginPage) {
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
      <HeaderTemplate title={`${constants.PROJECT_NAME}, 계획적인 삶`} />
      <CommonTemplate
        isLoadingReissueToken={isLoadingReissueToken}
        isLogin={isLogin}
        isRenderLoadingOverlay={isRenderLoadingOverlay}
      >
        <div className="hero-content flex-col w-full">
          <OAuthLoginForm onClick={changeOAuthType} />
        </div>
      </CommonTemplate>
    </>
  );
}
