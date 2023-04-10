import LogoButton from "@/components/common/atoms/LogoButton";
import { SOCIAL_LOGIN_CONFIG } from "@/utils/social-login-config";

/**
 * @description 소셜 로그인 폼 컴포넌트
 */
export default function SocialLoginForm() {
  return (
    <>
      {SOCIAL_LOGIN_CONFIG.map((config) => {
        const { className, LogoComponent, text } = config;
        return (
          <LogoButton buttonClassName={className} key={`logo-button-${text}`} value={text}>
            <LogoComponent className="w-7 h-7" />
          </LogoButton>
        );
      })}
    </>
  );
}
