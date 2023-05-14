import type { ReactNode } from "react";

interface ICardStyle {
  maxWidth?: string;
  shadow?: string;
  width?: string;
}

interface ICard {
  children: ReactNode; // 로고 컴포넌트
  styles?: ICardStyle;
}

export default function Card({ children, styles }: ICard) {
  const { maxWidth = "max-w-full", shadow = "shadow-2xl", width = "w-1/2" } = styles || {};

  return <div className={`card ${shadow} ${maxWidth} ${width}`}>{children}</div>;
}
