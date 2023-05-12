import NavigationBar from "@/components/common/organisms/NavigationBar";
import type { ICommonProps } from "@/types/common";
import type { ReactNode } from "react";

interface ICommonTemplate extends ICommonProps {
  children: ReactNode;
}

export default function CommonTemplate({ children, isLogin }: ICommonTemplate) {
  return (
    <div className="w-screen h-screen">
      <header className="top-0">
        <NavigationBar isLogin={isLogin} />
      </header>
      <div className="hero h-[calc(100%-4rem)] w-full py-5 px-10 max-sm:p-0">{children}</div>
    </div>
  );
}
