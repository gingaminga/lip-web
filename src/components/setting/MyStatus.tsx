import SubTitle from "@/components/common/molecules/SubTitle";
import { requestNotificationPermission } from "@/utils/notification";
import { ChangeEvent, useState } from "react";

/**
 * @description 내 상태 컴포넌트
 */
export default function MyStatus() {
  const [isPermitNotification, setPersmitNotification] = useState(Notification.permission === "granted");
  const toggleHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;

    if (isChecked) {
      const isPermit = await requestNotificationPermission();

      setPersmitNotification(isPermit);
    }
  };

  return (
    <section>
      <SubTitle title="내 상태" />
      <div className="form-control w-24">
        <label className="label cursor-pointer" htmlFor="notification-permission">
          <span className="label-text">알림</span>
          <input
            checked={isPermitNotification}
            className={`toggle border-2 ${isPermitNotification ? "bg-rose-300 border-rose-300" : ""}`}
            id="notification-permission"
            onChange={toggleHandler}
            type="checkbox"
          />
        </label>
      </div>
    </section>
  );
}
