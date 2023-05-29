import DeveloperContact from "@/components/setting/DeveloperContact";
import ETC from "@/components/setting/ETC";
import MyInfo from "@/components/setting/MyInfo";
import RemoveContent from "@/components/setting/RemoveContent";

/**
 * @description 설정 내용 컴포넌트
 */
export default function SettingContent() {
  return (
    <div>
      <MyInfo />
      <div className="divider" />
      <RemoveContent />
      <div className="divider" />
      <DeveloperContact />
      <div className="divider" />
      <ETC />
    </div>
  );
}
