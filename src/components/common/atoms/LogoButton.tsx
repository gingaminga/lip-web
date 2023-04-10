interface ILogoButton {
  buttonClassName?: string; // 버튼 css
  children: JSX.Element; // 로고 컴포넌트
  value: string; // 버튼 텍스트
}

/**
 * @description 로고가 있는 버튼 컴포넌트
 */
export default function LogoButton({ buttonClassName = "btn btn-block gap-2.5", children, value }: ILogoButton) {
  return (
    <button className={`${buttonClassName} max-sm:btn-circle`} type="button">
      {children}
      <span className="max-sm:hidden">{value}</span>
    </button>
  );
}
