import CommonTemplate from "@/components/common/templates/CommonTemplate";
import type { ICommonProps } from "@/types/common";
import type { ReactNode } from "react";

interface IMainTemplate extends ICommonProps {
  children: ReactNode;
}

export default function MainTemplate({ children, isLogin }: IMainTemplate) {
  return (
    <CommonTemplate isLogin={isLogin}>
      <div className="flex justify-start h-full w-full max-w-full shadow-xl rounded-2xl bg-base-200 max-sm:bg-base-100 max-sm:rounded-none max-sm:flex-col-reverse">
        <div className="hero-content basis-5 w-full h-full rounded-l-[inherit] bg-base-300">메뉴리스트</div>
        <div className="hero-content w-full h-full max-w-full">{children}</div>
      </div>
    </CommonTemplate>
  );
}
