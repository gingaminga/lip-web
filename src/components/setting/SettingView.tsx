import ArticleTemplate from "@/components/common/templates/ArticleTemplate";
import SettingContent from "@/components/setting/SettingContent";
import SettingTitle from "@/components/setting/SettingTitle";
import useUser from "@/hooks/useUser";

export default function SettingView() {
  const { userInfo } = useUser();

  return (
    <ArticleTemplate>
      <div className="flex flex-col gap-10 w-full h-full overflow-auto max-lg:gap-6">
        <SettingTitle email={userInfo.email} nickname={userInfo.nickname} />
        <SettingContent nickname={userInfo.nickname} />
      </div>
    </ArticleTemplate>
  );
}
