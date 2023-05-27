import MainTemplate from "@/components/common/templates/MainTemplate";
import CalendarView from "@/components/todo/CalendarView";
import ToDoView from "@/components/todo/ToDoView";
import type { ICommonProps } from "@/types/common";
import { getYYYYMMDD } from "@/utils/date";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback } from "react";

type TTodoPage = ICommonProps;

export default function TodoPage({ isLogin }: TTodoPage) {
  const { query } = useRouter();

  const TodoView = useCallback(() => {
    const { date } = query;

    if (!date) {
      return <CalendarView />;
    }

    let yyyymmdd = "";

    if (typeof date === "object") {
      // 마지막 요소를 기준으로 처리함
      yyyymmdd = date[date.length - 1];
    } else {
      yyyymmdd = date;
    }

    yyyymmdd = getYYYYMMDD("-", yyyymmdd);
    const newDate = new Date(yyyymmdd);

    return <ToDoView date={newDate} />;
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
