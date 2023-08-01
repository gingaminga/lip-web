import HeaderTemplate from "@/components/common/templates/HeaderTemplate";
import MainTemplate from "@/components/common/templates/MainTemplate";
import DetailRoutineView from "@/components/routine/DetailRoutineView";
import type { ICommonProps } from "@/types/common";
import { useRouter } from "next/router";

type TDetailRoutinePage = ICommonProps;

export default function DetailRoutinePage({
  isLoadingReissueToken,
  isLogin,
  isRenderLoadingOverlay,
}: TDetailRoutinePage) {
  const { asPath } = useRouter();

  const [, id] = asPath.split("/routine/");

  return (
    <>
      <HeaderTemplate title="규칙적인 습관만들기" />
      <MainTemplate
        isLoadingReissueToken={isLoadingReissueToken}
        isLogin={isLogin}
        isRenderLoadingOverlay={isRenderLoadingOverlay}
      >
        <DetailRoutineView routineID={Number(id)} />
      </MainTemplate>
    </>
  );
}
