import GoogleLogo from "@/assets/images/google-logo.svg";
import KakaoLogo from "@/assets/images/kakao-logo.svg";
import NaverLogo from "@/assets/images/naver-logo.svg";
import type { TOAuthType } from "@/types/oauth";
import { getYYYYMMDD } from "@/utils/date";
import { BsCalendarHeart } from "react-icons/bs";
import { MdEventRepeat, MdSettings } from "react-icons/md";
import { RiTodoLine } from "react-icons/ri";

export const OAUTH_LOGIN_CONFIG = [
  {
    className: "btn-kakao btn-block gap-2.5",
    LogoComponent: KakaoLogo,
    text: "Login with Kakao",
    type: "kakao" as TOAuthType,
  },
  {
    className: "btn-naver btn-block gap-2.5",
    LogoComponent: NaverLogo,
    text: "Login with Naver",
    type: "naver" as TOAuthType,
  },
  {
    className: "btn-google btn-block gap-2.5",
    LogoComponent: GoogleLogo,
    text: "Login with Google",
    type: "google" as TOAuthType,
  },
];

export const ROUTE_CONFIG = [
  {
    query: {
      date: getYYYYMMDD(""),
    },
    route: "/todo",
    text: "투두 관리",
  },
  {
    route: "/routine",
    text: "루틴 관리",
  },
  {
    route: "/setting",
    text: "설정",
  },
  {
    text: "로그아웃",
  },
];

export const LOCAL_TODO_ROUTE_CONFIG = [
  {
    route: "/todo",
    query: {
      date: getYYYYMMDD(""),
    },
    IconComponent: RiTodoLine,
  },
  {
    route: "/todo",
    IconComponent: BsCalendarHeart,
  },
];

export const LOCAL_ROUTINE_ROUTE_CONFIG = [
  {
    route: "/routine",
    IconComponent: MdEventRepeat,
  },
];

export const LOCAL_SETTING_ROUTE_CONFIG = [
  {
    route: "/setting",
    IconComponent: MdSettings,
  },
];
