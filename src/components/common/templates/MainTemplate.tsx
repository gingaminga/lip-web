import LocalNavigationBar from "@/components/common/organisms/LocalNavigationBar";
import CommonTemplate from "@/components/common/templates/CommonTemplate";
import type { ICommonProps } from "@/types/common";
import type { ReactNode } from "react";

interface IMainTemplate extends ICommonProps {
  children: ReactNode;
}

export default function MainTemplate({
  children,
  isLoadingReissueToken,
  isLogin,
  isRenderLoadingOverlay,
}: IMainTemplate) {
  return (
    <CommonTemplate
      isLoadingReissueToken={isLoadingReissueToken}
      isLogin={isLogin}
      isRenderLoadingOverlay={isRenderLoadingOverlay}
    >
      <div className="flex justify-start h-full w-full max-w-full border border-base-200 shadow-inset rounded-2xl max-lg:bg-base-100 max-lg:rounded-none max-lg:flex-col-reverse max-lg:border-none">
        <div className="hero-content basis-5 w-full h-full rounded-l-[inherit] bg-base-300">
          <LocalNavigationBar />
        </div>
        <main className="hero-content w-full h-full max-w-full">{children}</main>
      </div>
    </CommonTemplate>
  );
}
