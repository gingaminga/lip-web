import MainTemplate from "@/components/common/templates/MainTemplate";
import type { ICommonProps } from "@/types/common";
import Head from "next/head";

type TRoutinePage = ICommonProps;

export default function RoutinePage({ isLogin }: TRoutinePage) {
  return (
    <>
      <Head>
        <title>life is plan</title>
      </Head>
      <MainTemplate isLogin={isLogin}>routine</MainTemplate>
    </>
  );
}
