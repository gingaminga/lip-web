/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
import ThemeToggle from "@/components/common/organisms/ThemeToggle";
import useLogoutMutation from "@/hooks/queries/useLogoutMutation";
import useUser from "@/hooks/useUser";
import type { ICommonProps } from "@/types/common";
import { ROUTE_CONFIG } from "@/utils/config";
import constants from "@/utils/constants";
import Link from "next/link";
import Router from "next/router";
import { useCallback, useMemo } from "react";
import { HiMenuAlt2 } from "react-icons/hi";

interface IGlobalNavigationBar extends ICommonProps {
  projectName?: string;
}

/**
 * @description 전역 네비게이션 바 컴포넌트
 */
export default function GlobalNavigationBar({ isLogin, projectName = constants.PROJECT_NAME }: IGlobalNavigationBar) {
  const { mutate } = useLogoutMutation({
    onSuccess: () => {
      Router.reload();
    },
  });
  const { deviceToken } = useUser();

  const logout = useCallback(() => {
    const params = {
      deviceToken,
    };

    mutate(params);
  }, [deviceToken, mutate]);

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
  const MenuListView = useCallback(
    (type = 0) =>
      ROUTE_CONFIG.map((config) => {
        const { route, text, query } = config;
        let className = "normal-case text-md";

        className += type === 1 ? "" : "btn btn-ghost";

        if (route) {
          return (
            <li key={`menu-item-${route}-${text}`}>
              <Link
                className={`${className}`}
                href={{
                  pathname: route,
                  query,
                }}
              >
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
            <button className={className} onClick={logout} type="button">
              {text}
            </button>
          </li>
        );
      }),
    [logout],
  );

  const NavigationStartView = useCallback(() => {
    const hiddenWhenNotLogin = isLogin ? "" : "hidden";

    return (
      <>
        <div className="navbar-start max-lg:hidden">
          {ProjectTitleView}
          <ThemeToggle />
        </div>
        <div className="navbar-start lg:hidden">
          <div className={`dropdown ${hiddenWhenNotLogin}`}>
            {/* label로 button을 구성 후 tabIndex 설정을 해야 dropdown style이 모바일 chrome, safari에서 동작함 */}
            {/* daisyUI에 설명되어있음 */}
            <label className="btn btn-ghost btn-circle" tabIndex={0}>
              <HiMenuAlt2 className="h-5 w-5" />
            </label>
            <ul className="menu menu-compact dropdown-content p-3 shadow bg-base-200 rounded-box w-40" tabIndex={0}>
              {MenuListView()}
            </ul>
          </div>
        </div>
      </>
    );
  }, [MenuListView, ProjectTitleView, isLogin]);

  const NavigationCenterView = useCallback(() => {
    const hiddenWhenNotLogin = isLogin ? "" : "hidden";

    return (
      <>
        <div className="navbar-center max-lg:hidden">
          <ul className={`menu menu-horizontal ${hiddenWhenNotLogin}`}>{MenuListView(1)}</ul>
        </div>
        <div className="navbar-center lg:hidden">{ProjectTitleView}</div>
      </>
    );
  }, [MenuListView, ProjectTitleView, isLogin]);

  const NavigationEndView = useCallback(() => {
    const hiddenWhenNotLogin = isLogin ? "" : "hidden";

    return (
      <>
        <div className="navbar-end max-lg:hidden">
          <button className={`btn btn-ghost btn-xs ${hiddenWhenNotLogin}`} onClick={logout} type="button">
            로그아웃
          </button>
        </div>
        <div className="navbar-end lg:hidden">
          <ThemeToggle />
        </div>
      </>
    );
  }, [isLogin, logout]);

  return (
    <nav className="navbar">
      {NavigationStartView()}
      {NavigationCenterView()}
      {NavigationEndView()}
    </nav>
  );
}
