/**
 * @description 알림 권한 요청하기
 * @returns true/false
 */
export const requestNotificationPermission = async () => {
  try {
    if ("Notification" in window) {
      const result = await Notification.requestPermission();

      return result === "granted";
    }

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};
