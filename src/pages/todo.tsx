import MainTemplate from "@/components/common/templates/MainTemplate";
import type { ICommonProps } from "@/types/common";
import Head from "next/head";

type TTodoPage = ICommonProps;

export default function TodoPage({ isLogin }: TTodoPage) {
  return (
    <>
      <Head>
        <title>life is plan</title>
      </Head>
      <MainTemplate isLogin={isLogin}>testsetas</MainTemplate>
    </>
  );
}
