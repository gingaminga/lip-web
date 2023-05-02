import LogoButton from "@/components/common/atoms/LogoButton";
import type { TChangeOAuthType } from "@/pages/login";
import { OAUTH_LOGIN_CONFIG } from "@/utils/config";

interface IOAuthLoginForm {
  onClick: TChangeOAuthType;
}

/**
 * @description OAuth 로그인 폼 컴포넌트
 */
export default function OAuthLoginForm({ onClick }: IOAuthLoginForm) {
  const OAuthButtonView = () =>
    OAUTH_LOGIN_CONFIG.map((config) => {
      const { className, LogoComponent, text, type } = config;
      const handleClick = () => {
        onClick(type);
      };

      return (
        <LogoButton buttonClassName={className} key={`logo-button-${text}`} onClick={handleClick} value={text}>
          <LogoComponent className="w-7 h-7" />
        </LogoButton>
      );
    });

  return (
    <div className="card shadow-2xl max-w-full w-1/2">
      <div className="card-body justify-center max-sm:flex-row max-xs:flex-col max-xs:items-center">
        {OAuthButtonView()}
      </div>
    </div>
  );
}
