import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setUserInfo } from "@/store/user/reducer";
import { IUserData } from "@/types/user";

/**
 * @description 유저 관련 처리 hook
 */
export default function useUser() {
  const deviceToken = useAppSelector((state) => state.user.deviceToken);
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const dispatch = useAppDispatch();

  /**
   * @description 로그인 유무
   */
  const isLogin = userInfo.id > 0;

  /**
   * @description 유저 정보 저장하기
   * @param info 유저 정보
   */
  const saveUserInfo = (info: IUserData) => {
    dispatch(setUserInfo(info));
  };

  return {
    deviceToken,
    isLogin,
    saveUserInfo,
    userInfo,
  };
}
