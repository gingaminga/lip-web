import LogoButton from "@/components/common/atoms/LogoButton";
import { OAUTH_LOGIN_CONFIG } from "@/utils/config";

/**
 * @description OAuth 로그인 폼 컴포넌트
 */
export default function OAuthLoginForm() {
  return (
    <div className="card shadow-2xl max-w-full w-1/2">
      <div className="card-body justify-center max-sm:flex-row max-xs:flex-col max-xs:items-center">
        {OAUTH_LOGIN_CONFIG.map((config) => {
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
