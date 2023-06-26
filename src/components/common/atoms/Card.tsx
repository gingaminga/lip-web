import { TElementRefItem } from "@/types/common";
import type { ReactNode } from "react";

interface ICardStyle {
  height?: string;
  maxWidth?: string;
  shadow?: string;
  width?: string;
}

interface ICard {
  children: ReactNode; // 로고 컴포넌트
  innerRef?: TElementRefItem<HTMLDivElement>;
  styles?: ICardStyle;
}

export default function Card({ children, innerRef, styles }: ICard) {
  const { height, maxWidth = "max-w-full", shadow = "shadow-2xl", width = "w-1/2" } = styles || {};

  const className = `card card-compact ${shadow} ${maxWidth} ${width}${height ? ` ${height}` : ""}`;

  return (
    <div className={className} ref={innerRef}>
      {children}
    </div>
  );
}
