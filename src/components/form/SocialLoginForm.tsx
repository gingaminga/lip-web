import LogoButton from "@/components/common/atoms/LogoButton";
import { SOCIAL_LOGIN_CONFIG } from "@/utils/social-login-config";

/**
 * @description 소셜 로그인 폼 컴포넌트
 */
export default function SocialLoginForm() {
  return (
    <div className="card shadow-2xl max-w-full w-1/2">
      <div className="card-body justify-center max-sm:flex-row max-xs:flex-col max-xs:items-center">
        {SOCIAL_LOGIN_CONFIG.map((config) => {
          const { className, LogoComponent, text } = config;
          return (
            <LogoButton buttonClassName={className} key={`logo-button-${text}`} value={text}>
              <LogoComponent className="w-7 h-7" />
            </LogoButton>
          );
        })}
      </div>
    </div>
  );
}
