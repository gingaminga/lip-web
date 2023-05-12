import CommonTemplate from "@/components/common/templates/CommonTemplate";
import type { ICommonProps } from "@/types/common";
import type { ReactNode } from "react";

interface IMainTemplate extends ICommonProps {
  children: ReactNode;
}

export default function MainTemplate({ children, isLogin }: IMainTemplate) {
  return (
    <CommonTemplate isLogin={isLogin}>
      <div className="hero h-[calc(100%-4rem)] w-full py-5 px-10 max-sm:p-0">
        <div className="hero-content max-w-full shadow-xl h-full w-full bg-base-100 rounded-2xl bg-primary-200 max-sm:rounded-none">
          {children}
        </div>
      </div>
    </CommonTemplate>
  );
}
