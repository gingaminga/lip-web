import MainTemplate from "@/components/common/templates/MainTemplate";
import type { ICommonProps } from "@/types/common";
import Head from "next/head";

type TSettingMyPage = ICommonProps;

export default function SettingMyPage({ isLogin }: TSettingMyPage) {
  return (
    <>
      <Head>
        <title>life is plan</title>
      </Head>
      <MainTemplate isLogin={isLogin}>setting me</MainTemplate>
    </>
  );
}
