import DeveloperContact from "@/components/setting/DeveloperContact";
import ETC from "@/components/setting/ETC";
import MyInfo from "@/components/setting/MyInfo";
import NicknameChanger from "@/components/setting/NicknameChanger";
import RemoveContent from "@/components/setting/RemoveContent";
import useToggle from "@/hooks/useToggle";
import { useCallback } from "react";

/**
 * @description 설정 내용 컴포넌트
 */
export default function SettingContent() {
  const { handleToggleActive: handleActiveNicknameChanger, isToggleActive: isActiveNicknameChanger } = useToggle();

  const className = isActiveNicknameChanger ? "h-full flex flex-col justify-center w-full" : "";

  const SettingContentView = useCallback(() => {
    if (isActiveNicknameChanger) {
      return <NicknameChanger onCancleEvent={handleActiveNicknameChanger} />;
    }

    return (
      <>
        <MyInfo nicknameChangerEvent={handleActiveNicknameChanger} />
        <div className="divider" />
        <RemoveContent />
        <div className="divider" />
        <DeveloperContact />
        <div className="divider" />
        <ETC />
      </>
    );
  }, [handleActiveNicknameChanger, isActiveNicknameChanger]);

  return <div className={className}>{SettingContentView()}</div>;
}
