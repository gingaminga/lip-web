import useAddFCMTokenMutation from "@/hooks/queries/useAddFCMTokenMutation";
import useUser from "@/hooks/useUser";
import { useAppDispatch } from "@/store/hooks";
import { setDeviceToken } from "@/store/user/reducer";
import { processFirebaseCloudMessaging } from "@/utils/firebase";
import { useCallback, useEffect } from "react";

let isInit = false; // 최초 한 번만 동작하기 위한 플래그

/**
 * @description firebase hook
 */
export default function useFirebase() {
  const dispatch = useAppDispatch();
  const { isLogin } = useUser();
  const { mutate: fetchAddFCMToken } = useAddFCMTokenMutation();

  const addFCMToken = useCallback(
    (token: string) => {
      const params = {
        token,
      };

      fetchAddFCMToken(params);
    },
    [fetchAddFCMToken],
  );

  /**
   * @description 파이어베이스 설정
   */
  const setFirebase = useCallback(async () => {
    const token = await processFirebaseCloudMessaging();

    if (token) {
      dispatch(setDeviceToken(token));
      addFCMToken(token);
    }
  }, [addFCMToken, dispatch]);

  /**
   * @description 로그인이 되어있을 때, 최초 한 번 firebase 설정하기
   */
  useEffect(() => {
    if (isLogin && !isInit) {
      setFirebase();

      isInit = true;
    }
  }, [isLogin, setFirebase]);

  return {
    setFirebase,
  };
}
