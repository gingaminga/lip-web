import LoadingOverlay from "@/components/common/organisms/LoadingOverlay";
import ThemeToggle from "@/components/ThemeToggle";
import useRegisterToken from "@/hooks/useRegisterToken";
import useVisibleLayout from "@/hooks/useVisibleLayout";
import { AppProps } from "next/app";
import { useMemo } from "react";

/**
 * @description 고정 컴포넌트
 */
function FixedComponent() {
  return (
    <div className="fixed right-5 top-5">
      <ThemeToggle />
    </div>
  );
}

/**
 * @description 공통적으로 사용될 컴포넌트들을 묶어놓은 컴포넌트
 */
export default function WrapperCommonComponent({ Component, pageProps }: AppProps) {
  const { isRenderLoadingOverlay } = useVisibleLayout();
  const { isLoadingReissueToken } = useRegisterToken();

  const ComponentView = useMemo(() => {
    if (isRenderLoadingOverlay || isLoadingReissueToken) {
      return <LoadingOverlay />;
    }

    return <Component {...pageProps} />;
  }, [Component, isLoadingReissueToken, isRenderLoadingOverlay, pageProps]);

  return (
    <>
      <FixedComponent />
      {ComponentView}
    </>
  );
}
