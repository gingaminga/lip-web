import MainTemplate from "@/components/common/templates/MainTemplate";
import type { ICommonProps } from "@/types/common";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback } from "react";

type TTodoPage = ICommonProps;

export default function TodoPage({ isLogin }: TTodoPage) {
  const { query } = useRouter();

  const TodoView = useCallback(() => {
    const { date } = query;

    if (!date) {
      return <div>달력</div>;
    }

    return <div>할일</div>;
  }, [query]);

  return (
    <>
      <Head>
        <title>life is plan</title>
      </Head>
      <MainTemplate isLogin={isLogin}>{TodoView()}</MainTemplate>
    </>
  );
}
