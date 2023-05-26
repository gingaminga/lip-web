import LocalNavigationBar from "@/components/common/organisms/LocalNavigationBar";
import CommonTemplate from "@/components/common/templates/CommonTemplate";
import type { ICommonProps } from "@/types/common";
import type { ReactNode } from "react";

interface IMainTemplate extends ICommonProps {
  children: ReactNode;
}

export default function MainTemplate({ children, isLogin }: IMainTemplate) {
  return (
    <CommonTemplate isLogin={isLogin}>
      <div className="flex justify-start h-full w-full max-w-full border border-base-200 shadow-inset rounded-2xl max-sm:bg-base-100 max-sm:rounded-none max-sm:flex-col-reverse max-sm:border-none">
        <div className="hero-content basis-5 w-full h-full rounded-l-[inherit] bg-base-300">
          <LocalNavigationBar />
        </div>
        <main className="hero-content w-full h-full max-w-full">{children}</main>
      </div>
    </CommonTemplate>
  );
}
