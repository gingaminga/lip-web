import ArticleTemplate from "@/components/common/templates/ArticleTemplate";
import SettingContent from "@/components/setting/SettingContent";
import SettingTitle from "@/components/setting/SettingTitle";
import useUser from "@/hooks/useUser";

export default function SettingView() {
  const { userInfo } = useUser();

  return (
    <ArticleTemplate>
      <div className="flex flex-col gap-10 w-full h-full overflow-auto max-sm:gap-6">
        <SettingTitle nickname={userInfo.nickname} />
        <SettingContent />
      </div>
    </ArticleTemplate>
  );
}
