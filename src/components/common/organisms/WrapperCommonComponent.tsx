import LoadingOverlay from "@/components/common/organisms/LoadingOverlay";
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

  const ComponentView = useMemo(() => {
    if (isRenderLoadingOverlay || isLoadingReissueToken) {
      return <LoadingOverlay />;
    }

    return <Component {...pageProps} isLogin={isLogin} />;
  }, [Component, isLoadingReissueToken, isLogin, isRenderLoadingOverlay, pageProps]);

  return ComponentView;
}
