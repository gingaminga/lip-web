import MainTemplate from "@/components/common/templates/MainTemplate";
import type { ICommonProps } from "@/types/common";
import Head from "next/head";

type TSettingSystemPage = ICommonProps;

export default function SettingSystemPage({ isLogin }: TSettingSystemPage) {
  return (
    <>
      <Head>
        <title>life is plan</title>
      </Head>
      <MainTemplate isLogin={isLogin}>setting system</MainTemplate>
    </>
  );
}
