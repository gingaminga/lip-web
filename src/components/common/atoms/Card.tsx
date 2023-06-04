import type { ReactNode } from "react";

interface ICardStyle {
  height?: string;
  maxWidth?: string;
  shadow?: string;
  width?: string;
}

interface ICard {
  children: ReactNode; // 로고 컴포넌트
  styles?: ICardStyle;
}

export default function Card({ children, styles }: ICard) {
  const { height, maxWidth = "max-w-full", shadow = "shadow-2xl", width = "w-1/2" } = styles || {};

  const className = `card card-compact ${shadow} ${maxWidth} ${width}${height ? ` ${height}` : ""}`;

  return <div className={className}>{children}</div>;
}
