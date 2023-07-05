/**
 * @description 알림 권한 요청하기
 * @returns true/false
 */
export const requestNotificationPermission = async () => {
  try {
    const result = await Notification.requestPermission();

    return result === "granted";
  } catch (error) {
    console.error(error);
    return false;
  }
};
