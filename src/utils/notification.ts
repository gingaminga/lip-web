/**
 * @description 알림 권한 요청하기
 * @returns true/false
 */
export const requestNotificationPermission = async () => {
  try {
    if (!("Notification" in window)) {
      throw new Error("Not used Notification API");
    }

    if (Notification.permission === "granted") {
      return true;
    }

    const result = await Notification.requestPermission();

    return result === "granted";
  } catch (error) {
    console.error(error);
    return false;
  }
};
