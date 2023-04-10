import GoogleLogo from "@/assets/images/google-logo.svg";
import KakaoLogo from "@/assets/images/kakao-logo.svg";
import NaverLogo from "@/assets/images/naver-logo.svg";

export const SOCIAL_LOGIN_CONFIG = [
  {
    className: "btn-kakao btn-block gap-2.5",
    LogoComponent: KakaoLogo,
    text: "Login with Kakao",
  },
  {
    className: "btn-naver btn-block gap-2.5",
    LogoComponent: NaverLogo,
    text: "Login with Naver",
  },
  {
    className: "btn-google btn-block gap-2.5",
    LogoComponent: GoogleLogo,
    text: "Login with Google",
  },
];
