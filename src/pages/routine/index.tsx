import HeaderTemplate from "@/components/common/templates/HeaderTemplate";
import MainTemplate from "@/components/common/templates/MainTemplate";
import RoutineView from "@/components/routine/RoutineView";
import type { ICommonProps } from "@/types/common";

type TRoutinePage = ICommonProps;

export default function RoutinePage({ isLogin }: TRoutinePage) {
  return (
    <>
      <HeaderTemplate title="규칙적인 습관만들기" url={window.location.href} />
      <MainTemplate isLogin={isLogin}>
        <RoutineView />
      </MainTemplate>
    </>
  );
}
