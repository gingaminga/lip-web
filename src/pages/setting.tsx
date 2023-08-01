import HeaderTemplate from "@/components/common/templates/HeaderTemplate";
import MainTemplate from "@/components/common/templates/MainTemplate";
import SettingView from "@/components/setting/SettingView";
import type { ICommonProps } from "@/types/common";

type TSettingPage = ICommonProps;

export default function SettingPage({ isLoadingReissueToken, isLogin, isRenderLoadingOverlay }: TSettingPage) {
  return (
    <>
      <HeaderTemplate title="내 설정" />
      <MainTemplate
        isLoadingReissueToken={isLoadingReissueToken}
        isLogin={isLogin}
        isRenderLoadingOverlay={isRenderLoadingOverlay}
      >
        <SettingView />
      </MainTemplate>
    </>
  );
}
