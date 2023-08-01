import HeaderTemplate from "@/components/common/templates/HeaderTemplate";
import MainTemplate from "@/components/common/templates/MainTemplate";
import SettingView from "@/components/setting/SettingView";
import type { ICommonProps } from "@/types/common";

type TSettingPage = ICommonProps;

export default function SettingPage({ isLogin }: TSettingPage) {
  return (
    <>
      <HeaderTemplate title="내 설정" url={window.location.href} />
      <MainTemplate isLogin={isLogin}>
        <SettingView />
      </MainTemplate>
    </>
  );
}
