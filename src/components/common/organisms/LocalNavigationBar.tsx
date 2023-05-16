import { LOCAL_ROUTINE_ROUTE_CONFIG, LOCAL_SETTING_ROUTE_CONFIG, LOCAL_TODO_ROUTE_CONFIG } from "@/utils/config";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";

/**
 * @description 지역 네비게이션 바 컴포넌트
 */
export default function LocalNavigationBar() {
  const { pathname } = useRouter();

  const MenuListView = useCallback(() => {
    if (pathname === "/todo") {
      return LOCAL_TODO_ROUTE_CONFIG.map((config) => {
        const { IconComponent, route, query } = config;

        return (
          <li key={`todo-menu-list-${route}-${query && JSON.stringify(query)}`}>
            <Link
              className="btn btn-ghost"
              href={{
                pathname: route,
                query,
              }}
            >
              <IconComponent className="h-5 w-5" />
            </Link>
          </li>
        );
      });
    }

    if (pathname === "/routine") {
      return LOCAL_ROUTINE_ROUTE_CONFIG.map((config) => {
        const { IconComponent, route } = config;

        return (
          <li key={`routine-menu-list-${route}`}>
            <Link
              className="btn btn-ghost"
              href={{
                pathname: route,
              }}
            >
              <IconComponent className="h-5 w-5" />
            </Link>
          </li>
        );
      });
    }

    if (pathname.includes("/setting")) {
      return LOCAL_SETTING_ROUTE_CONFIG.map((config) => {
        const { IconComponent, route } = config;

        return (
          <li key={`setting-menu-list-${route}`}>
            <Link
              className="btn btn-ghost"
              href={{
                pathname: route,
              }}
            >
              <IconComponent className="h-5 w-5" />
            </Link>
          </li>
        );
      });
    }

    return null;
  }, [pathname]);

  return (
    <nav className="rounded-inherit">
      <ul className="menu max-sm:menu-horizontal">{MenuListView()}</ul>
    </nav>
  );
}
