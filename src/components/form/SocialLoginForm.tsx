import KakaoLogo from "@/assets/images/kakao-logo.svg";
import NaverLogo from "@/assets/images/naver-logo.svg";
import GoogleLogo from "@/assets/images/google-logo.svg";
import LogoButton from "@/components/common/atoms/LogoButton";

const SOCIAL_LOGIN_FORM_CONFIG = [
  {
    classNames: ["btn-kakao", "btn-block", "gap-2.5"],
    LogoComponent: <KakaoLogo className="w-7 h-7" />,
    text: "Login with Kakao",
  },
  {
    classNames: ["btn-naver", "btn-block", "gap-2.5"],
    LogoComponent: <NaverLogo className="w-7 h-7" />,
    text: "Login with Naver",
  },
  {
    classNames: ["btn-google", "btn-block", "gap-2.5"],
    LogoComponent: <GoogleLogo className="w-7 h-7" />,
    text: "Login with Google",
  },
];

/**
 * @description 소셜 로그인 폼 컴포넌트
 */
export default function SocialLoginForm() {
  return (
    <>
      {SOCIAL_LOGIN_FORM_CONFIG.map((config) => {
        const { LogoComponent, classNames, text } = config;
        return (
          <LogoButton buttonClassNames={classNames} key={`logo-button-${text}`} value={text}>
            {LogoComponent}
          </LogoButton>
        );
      })}
    </>
  );
}
