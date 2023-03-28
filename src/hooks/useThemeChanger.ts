import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setTheme } from "@/store/theme/reducer";
import { ChangeEvent, useEffect } from "react";

/**
 * @description 테마 변경 hook
 */
export default function useThemeChanger() {
  const theme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();

  /**
   * @description toggle handler
   * @param event input element event value
   */
  const toggleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const changedTheme = event.target.checked ? "dark" : "light";

    localStorage.setItem("theme", changedTheme); // 테마값 저장
    document.documentElement.setAttribute("data-theme", changedTheme); // html에 theme 설정
    dispatch(setTheme(changedTheme)); // redux에 테마 상태 저장
  };

  /**
   * @description theme 변경 시 redux action 발생
   */
  useEffect(() => {
    const defaultTheme = "light";
    let currentTheme = localStorage.getItem("theme") || defaultTheme;

    if (currentTheme !== "dark" && currentTheme !== "light") {
      // localstorage에 저장된 테마가 dark/light 테마가 아닌 경우 강제로 변경
      currentTheme = defaultTheme;
    }

    if (currentTheme === theme) {
      // 같으면 redux action이 발생하지 않음
      return;
    }

    dispatch(setTheme(currentTheme as "dark" | "light"));
  }, [dispatch, theme]);

  return {
    toggle: theme === "dark",
    toggleHandler,
  };
}
