import HeaderTemplate from "@/components/common/templates/HeaderTemplate";
import LoadingOverlay from "@/components/common/organisms/LoadingOverlay";
import useFirebase from "@/hooks/useFirebase";
import useRegisterToken from "@/hooks/useRegisterToken";
import useVisibleLayout from "@/hooks/useVisibleLayout";
import { AppProps } from "next/app";
import { useMemo } from "react";

/**
 * @description 공통적으로 사용될 컴포넌트들을 묶어놓은 컴포넌트
 */
export default function WrapperCommonComponent({ Component, pageProps }: AppProps) {
  const { isLogin, isRenderLoadingOverlay } = useVisibleLayout();
  const { isLoadingReissueToken } = useRegisterToken();
  useFirebase();

  const ComponentView = useMemo(() => {
    if (isRenderLoadingOverlay || isLoadingReissueToken) {
      return (
        <>
          <HeaderTemplate title="로딩 중.." />
          <LoadingOverlay />
        </>
      );
    }

    return <Component {...pageProps} isLogin={isLogin} />;
  }, [Component, isLoadingReissueToken, isLogin, isRenderLoadingOverlay, pageProps]);

  return ComponentView;
}
