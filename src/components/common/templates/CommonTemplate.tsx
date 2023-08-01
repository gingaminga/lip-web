import GlobalNavigationBar from "@/components/common/organisms/GlobalNavigationBar";
import LoadingOverlay from "@/components/common/organisms/LoadingOverlay";
import type { ICommonProps } from "@/types/common";
import type { ReactNode } from "react";

interface ICommonTemplate extends ICommonProps {
  children: ReactNode;
}

export default function CommonTemplate({
  children,
  isLoadingReissueToken,
  isLogin,
  isRenderLoadingOverlay,
}: ICommonTemplate) {
  if (isLoadingReissueToken || isRenderLoadingOverlay) {
    return <LoadingOverlay />;
  }

  return (
    <div className="w-screen h-screen">
      <header className="top-0">
        <GlobalNavigationBar
          isLoadingReissueToken={isLoadingReissueToken}
          isLogin={isLogin}
          isRenderLoadingOverlay={isRenderLoadingOverlay}
        />
      </header>
      <div className="hero h-[calc(100%-4rem)] py-10 px-20 max-lg:p-0">{children}</div>
    </div>
  );
}
