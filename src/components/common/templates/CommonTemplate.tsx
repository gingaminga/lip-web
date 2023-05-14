import GlobalNavigationBar from "@/components/common/organisms/GlobalNavigationBar";
import type { ICommonProps } from "@/types/common";
import type { ReactNode } from "react";

interface ICommonTemplate extends ICommonProps {
  children: ReactNode;
}

export default function CommonTemplate({ children, isLogin }: ICommonTemplate) {
  return (
    <div className="w-screen h-screen">
      <header className="top-0">
        <GlobalNavigationBar isLogin={isLogin} />
      </header>
      <div className="hero h-[calc(100%-4rem)] w-full py-10 px-20 max-sm:p-0">{children}</div>
    </div>
  );
}
