import NotFound from "@/assets/images/not-found.svg";
import MainTemplate from "@/components/common/templates/MainTemplate";
import { ICommonProps } from "@/types/common";
import { ROUTER_PATH } from "@/utils/config";
import Head from "next/head";
import Link from "next/link";

type TCustom404Page = ICommonProps;

export default function Custom404Page({ isLogin }: TCustom404Page) {
  return (
    <>
      <Head>
        <title>life is plan</title>
      </Head>
      <MainTemplate isLogin={isLogin}>
        <div className="flex flex-col justify-center items-center gap-2">
          <NotFound className="fill-current w-60 h-60" />
          <span className="font-bold text-2xl">알 수 없는 곳이예요.</span>
          <Link className="btn" href={ROUTER_PATH.TODO}>
            메인으로..🎊
          </Link>
        </div>
      </MainTemplate>
    </>
  );
}
