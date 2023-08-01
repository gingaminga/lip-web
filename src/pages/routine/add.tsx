import HeaderTemplate from "@/components/common/templates/HeaderTemplate";
import MainTemplate from "@/components/common/templates/MainTemplate";
import DetailRoutineView from "@/components/routine/DetailRoutineView";
import type { ICommonProps } from "@/types/common";

type TRoutinePage = ICommonProps;

export default function RoutinePage({ isLoadingReissueToken, isLogin, isRenderLoadingOverlay }: TRoutinePage) {
  return (
    <>
      <HeaderTemplate title="규칙적인 습관만들기" />
      <MainTemplate
        isLoadingReissueToken={isLoadingReissueToken}
        isLogin={isLogin}
        isRenderLoadingOverlay={isRenderLoadingOverlay}
      >
        <DetailRoutineView />
      </MainTemplate>
    </>
  );
}
