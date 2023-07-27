import GoogleLogo from "@/assets/images/google-logo.svg";
import KakaoLogo from "@/assets/images/kakao-logo.svg";
import NaverLogo from "@/assets/images/naver-logo.svg";
import type { TOAuthType } from "@/types/oauth";
import { getYYYYMMDD } from "@/utils/date";
import { BsCalendarHeart } from "react-icons/bs";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdEventRepeat, MdSettings } from "react-icons/md";
import { RiTodoLine } from "react-icons/ri";

export const ROUTER_PATH = {
  CALLABCK: {
    OAUTH: "/callback/[oauth]",
  },
  LOGIN: "/login",
  ROUTINE: {
    ADD: "/routine/add,",
    MAIN: "/routine",
  },
  SETTING: "/setting",
  TODO: "/todo",
};

export const NOT_LOGIN_PATH_COFNIG = [ROUTER_PATH.LOGIN, ROUTER_PATH.CALLABCK.OAUTH]; // 로그인되지 않아도 접근 가능한 경로

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
    route: ROUTER_PATH.TODO,
    text: "투두 관리",
  },
  {
    route: ROUTER_PATH.ROUTINE.MAIN,
    text: "루틴 관리",
  },
  {
    route: ROUTER_PATH.SETTING,
    text: "설정",
  },
  {
    text: "로그아웃",
  },
];

export const LOCAL_TODO_ROUTE_CONFIG = [
  {
    route: ROUTER_PATH.TODO,
    query: {
      date: getYYYYMMDD(""),
    },
    IconComponent: RiTodoLine,
  },
  {
    route: ROUTER_PATH.TODO,
    IconComponent: BsCalendarHeart,
  },
];

export const LOCAL_ROUTINE_ROUTE_CONFIG = [
  {
    route: ROUTER_PATH.ROUTINE.MAIN,
    IconComponent: MdEventRepeat,
  },
  {
    route: ROUTER_PATH.ROUTINE.ADD,
    IconComponent: IoMdAddCircleOutline,
  },
];

export const LOCAL_SETTING_ROUTE_CONFIG = [
  {
    route: ROUTER_PATH.SETTING,
    IconComponent: MdSettings,
  },
];

export const REMOVE_CONTENT_CONFIG = [
  {
    className: "btn max-lg:btn-sm",
    text: "할 일 전부 비우기",
    type: "remove-all-todo",
  },
  {
    className: "btn max-lg:btn-sm",
    text: "루틴 전부 비우기",
    type: "remove-all-routine",
  },
];
