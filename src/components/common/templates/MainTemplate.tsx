import CommonTemplate from "@/components/common/templates/CommonTemplate";
import type { ICommonProps } from "@/types/common";
import type { ReactNode } from "react";

interface IMainTemplate extends ICommonProps {
  children: ReactNode;
}

export default function MainTemplate({ children, isLogin }: IMainTemplate) {
  return (
    <CommonTemplate isLogin={isLogin}>
      <div className="hero-content max-w-full shadow-xl h-full w-full bg-base-200 rounded-2xl max-sm:rounded-none">
        {children}
      </div>
    </CommonTemplate>
  );
}
