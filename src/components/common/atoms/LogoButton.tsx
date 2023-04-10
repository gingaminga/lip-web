import { useMemo } from "react";

interface ILogoButton {
  children: JSX.Element; // 로고 컴포넌트
  buttonClassNames?: string[]; // 버튼 classname 여러개
  value: string; // 버튼 텍스트
}

/**
 * @description 로고가 있는 버튼 컴포넌트
 */
export default function LogoButton({
  children,
  buttonClassNames = ["btn", "btn-block", "gap-2.5"],
  value,
}: ILogoButton) {
  const className = useMemo(() => buttonClassNames.join(" "), [buttonClassNames]);

  return (
    <button className={className} type="button">
      {children}
      {value}
    </button>
  );
}
