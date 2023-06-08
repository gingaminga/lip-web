import MainTemplate from "@/components/common/templates/MainTemplate";
import DetailRoutineView from "@/components/routine/DetailRoutineView";
import type { ICommonProps } from "@/types/common";
import Head from "next/head";
import { useRouter } from "next/router";

type TDetailRoutinePage = ICommonProps;

export default function DetailRoutinePage({ isLogin }: TDetailRoutinePage) {
  const { asPath } = useRouter();

  const [id] = asPath.split("/routine/");

  return (
    <>
      <Head>
        <title>life is plan</title>
      </Head>
      <MainTemplate isLogin={isLogin}>
        <DetailRoutineView routineID={Number(id)} />
      </MainTemplate>
    </>
  );
}
