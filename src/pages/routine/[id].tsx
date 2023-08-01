import HeaderTemplate from "@/components/common/templates/HeaderTemplate";
import MainTemplate from "@/components/common/templates/MainTemplate";
import DetailRoutineView from "@/components/routine/DetailRoutineView";
import type { ICommonProps } from "@/types/common";
import { useRouter } from "next/router";

type TDetailRoutinePage = ICommonProps;

export default function DetailRoutinePage({ isLogin }: TDetailRoutinePage) {
  const { asPath } = useRouter();

  const [, id] = asPath.split("/routine/");

  return (
    <>
      <HeaderTemplate title="규칙적인 습관만들기" url={window.location.href} />
      <MainTemplate isLogin={isLogin}>
        <DetailRoutineView routineID={Number(id)} />
      </MainTemplate>
    </>
  );
}
