import MainTemplate from "@/components/common/templates/MainTemplate";
import type { ICommonProps } from "@/types/common";
import Head from "next/head";

type TSettingPage = ICommonProps;

export default function SettingPage({ isLogin }: TSettingPage) {
  return (
    <>
      <Head>
        <title>life is plan</title>
      </Head>
      <MainTemplate isLogin={isLogin}>setting</MainTemplate>
    </>
  );
}
