import useFirebase from "@/hooks/useFirebase";
import useRegisterToken from "@/hooks/useRegisterToken";
import useVisibleLayout from "@/hooks/useVisibleLayout";
import { AppProps } from "next/app";

/**
 * @description 공통적으로 사용될 컴포넌트들을 묶어놓은 컴포넌트
 */
export default function WrapperCommonComponent({ Component, pageProps }: AppProps) {
  const { isLogin, isRenderLoadingOverlay } = useVisibleLayout();
  const { isLoadingReissueToken } = useRegisterToken();
  useFirebase();

  return (
    <Component
      isLoadingReissueToken={isLoadingReissueToken}
      isLogin={isLogin}
      isRenderLoadingOverlay={isRenderLoadingOverlay}
      {...pageProps}
    />
  );
}
