import ArticleTemplate from "@/components/common/templates/ArticleTemplate";
import RoutineCard from "@/components/routine/RoutineCard";
import useRoutinesInfiniteQuery from "@/hooks/queries/useRoutinesInfiniteQuery";
import { IRoutineData } from "@/types/routine";
import { ROUTER_PATH } from "@/utils/config";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function RoutineView() {
  const [routines, setRoutines] = useState<IRoutineData[]>([]);

  /**
   * @description 루틴 저장하기
   * @param newRoutines 새로운 루틴 정보들
   */
  const saveRoutines = (newRoutines: IRoutineData[]) => {
    setRoutines(newRoutines);
  };

  const { ref, inView } = useInView();
  const {
    fetchNextPage: fetchGetRoutines,
    hasNextPage: hasNextPageInRoutines,
    isFetched: isFetchedGetRoutines,
  } = useRoutinesInfiniteQuery({
    cacheTime: 0,
    enabled: routines.length < 1,
    getNextPageParam: (currentRoutines) => currentRoutines[currentRoutines.length - 1]?.id, // 다음 페이지의 params를 설정
    onSuccess: ({ pages }) => {
      const newRoutines = pages.flat();
      saveRoutines(newRoutines);
    },
  });

  const RoutineListView = useMemo(() => {
    if (isFetchedGetRoutines && routines.length < 1) {
      return (
        <div className="w-full h-full flex justify-center items-center">
          <Link className="btn btn-lg animate-bounce" href={ROUTER_PATH.ROUTINE.ADD}>
            루틴 추가하러가기🎊
          </Link>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-[repeat(auto-fill,_15rem)] grid-rows-[repeat(auto-fill,_15rem)] justify-center gap-x-5 gap-y-10 overflow-auto h-full max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 max-lg:grid-rows-[repeat(auto-fill,_10rem)]">
        {routines.map((routine) => {
          const { alarm, color, content, friday, id, monday, saturday, sunday, thursday, tuesday, wednesday } = routine;
          const { hour, minute } = alarm;

          const days = {
            fri: friday,
            mon: monday,
            sat: saturday,
            sun: sunday,
            thu: thursday,
            tue: tuesday,
            wed: wednesday,
          };

          const path = `${ROUTER_PATH.ROUTINE.MAIN}/${id}`;

          return (
            <RoutineCard
              alarmHour={hour}
              alarmMinute={minute}
              days={days}
              innerRef={ref}
              path={path}
              key={`routine-card-${id}-${content}`}
              styles={{
                themeColor: color,
              }}
              title={content}
            />
          );
        })}
      </div>
    );
  }, [isFetchedGetRoutines, ref, routines]);

  /**
   * @description 인피니티 스크롤
   */
  useEffect(() => {
    if (!inView) return;

    if (hasNextPageInRoutines) {
      const routineID = routines.length < 1 ? -1 : routines[routines.length - 1].id;
      fetchGetRoutines({
        pageParam: routineID,
      });
    }
  }, [fetchGetRoutines, hasNextPageInRoutines, inView, routines]);

  return (
    <ArticleTemplate
      contentStyles={{
        maxWidth: "max-w-full",
      }}
    >
      {RoutineListView}
    </ArticleTemplate>
  );
}
