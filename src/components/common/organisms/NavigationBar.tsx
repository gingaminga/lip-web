import ThemeToggle from "@/components/ThemeToggle";
import type { ICommonProps } from "@/types/common";
import { ROUTE_CONFIG } from "@/utils/config";
import constants from "@/utils/constants";
import Link from "next/link";
import { useCallback, useMemo } from "react";
import { HiMenuAlt2 } from "react-icons/hi";

interface INavigationBar extends ICommonProps {
  projectName?: string;
}

/**
 * @description 네비게이션 바 컴포넌트
 */
export default function NavigationBar({ isLogin, projectName = constants.PROJECT_NAME }: INavigationBar) {
  const ProjectTitleView = useMemo(
    () => (
      <Link className="btn btn-ghost normal-case text-xl" href="/">
        {projectName}
      </Link>
    ),
    [projectName],
  );

  /**
   * @description 메뉴 리스트 뷰
   * @param type 종류
   * 0 - PC(default)
   * 1 - Mobile
   */
  const MenuListView = (type = 0) =>
    ROUTE_CONFIG.map((config) => {
      const { route, text } = config;
      let className = "normal-case text-md";

      className += type === 1 ? "" : "btn btn-ghost";

      if (route) {
        return (
          <li key={`menu-item-${route}-${text}`}>
            <Link className={`${className}`} href={route}>
              {text}
            </Link>
          </li>
        );
      }

      if (type === 1) {
        return null;
      }

      return (
        <li key={`menu-item-${route}-${text}`}>
          <button className={`${className}`} type="button">
            {text}
          </button>
        </li>
      );
    });

  const NavigationStartView = useCallback(() => {
    const hiddenWhenNotLogin = isLogin ? "" : "hidden";

    return (
      <>
        <div className="navbar-start max-sm:hidden">
          {ProjectTitleView}
          <ThemeToggle />
        </div>
        <div className="navbar-start sm:hidden">
          <div className={`dropdown ${hiddenWhenNotLogin}`}>
            <button className="btn btn-ghost btn-circle" tabIndex={0} type="button">
              <HiMenuAlt2 className="h-5 w-5" />
            </button>
            <ul className="menu menu-compact dropdown-content p-3 shadow bg-base-200 rounded-box w-40">
              {MenuListView()}
            </ul>
          </div>
        </div>
      </>
    );
  }, [ProjectTitleView, isLogin]);

  const NavigationCenterView = useCallback(() => {
    const hiddenWhenNotLogin = isLogin ? "" : "hidden";

    return (
      <>
        <div className="navbar-center max-sm:hidden">
          <ul className={`menu menu-horizontal ${hiddenWhenNotLogin}`}>{MenuListView(1)}</ul>
        </div>
        <div className="navbar-center sm:hidden">{ProjectTitleView}</div>
      </>
    );
  }, [ProjectTitleView, isLogin]);

  const NavigationEndView = useCallback(() => {
    const hiddenWhenNotLogin = isLogin ? "" : "hidden";

    return (
      <>
        <div className="navbar-end max-sm:hidden">
          <button className={`btn btn-ghost btn-xs ${hiddenWhenNotLogin}`} type="button">
            로그아웃
          </button>
        </div>
        <div className="navbar-end sm:hidden">
          <ThemeToggle />
        </div>
      </>
    );
  }, [isLogin]);

  return (
    <nav className="navbar">
      {NavigationStartView()}
      {NavigationCenterView()}
      {NavigationEndView()}
    </nav>
  );
}
