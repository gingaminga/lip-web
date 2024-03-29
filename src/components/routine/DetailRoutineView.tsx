import ArticleTemplate from "@/components/common/templates/ArticleTemplate";
import DetailRoutine from "@/components/routine/DetailRoutineForm";
import useAddRoutineMutation from "@/hooks/queries/useAddRoutineMutation";
import useDetailRoutineQuery from "@/hooks/queries/useDetailRoutineQuery";
import useModifyRoutineMutation from "@/hooks/queries/useModifyRoutineMutation";
import useRemoveRoutineMutation from "@/hooks/queries/useRemoveRoutineMutation";
import { TRoutineColor } from "@/types/color";
import { ROUTER_PATH } from "@/utils/config";
import Router from "next/router";

interface IDetailRoutineView {
  routineID?: number; // 루틴 id
}

export default function DetailRoutineView({ routineID = -1 }: IDetailRoutineView) {
  const { data, isFetching } = useDetailRoutineQuery(routineID, {
    cacheTime: 0,
    enabled: routineID > 0,
  });
  const { mutate: fetchAddRoutine } = useAddRoutineMutation({
    onSuccess: () => {
      Router.push(ROUTER_PATH.ROUTINE.MAIN);
    },
  });
  const { mutate: fetchModifyRoutine } = useModifyRoutineMutation({
    onSuccess: () => {
      Router.push(ROUTER_PATH.ROUTINE.MAIN);
    },
  });
  const { mutate: fetchRemoveRoutine } = useRemoveRoutineMutation({
    onSuccess: () => {
      Router.push(ROUTER_PATH.ROUTINE.MAIN);
    },
  });

  const addRoutine = (content: string, days: string, color: TRoutineColor, alarmHour: number, alarmMinute: number) => {
    const params = {
      alarmHour,
      alarmMinute,
      color,
      content,
      days,
    };
    fetchAddRoutine(params);
  };

  const modifyRoutine = (
    id: number,
    content: string,
    days: string,
    color: TRoutineColor,
    alarmHour: number,
    alarmMinute: number,
  ) => {
    const params = {
      alarmHour,
      alarmMinute,
      color,
      content,
      days,
      id,
    };
    fetchModifyRoutine(params);
  };

  const removeRoutine = (id: number) => {
    const params = {
      id,
    };
    fetchRemoveRoutine(params);
  };

  if (isFetching) {
    return <div>loading..</div>;
  }

  return (
    <ArticleTemplate>
      <div className="h-full w-full overflow-auto overflow-x-hidden">
        <DetailRoutine
          addRoutine={addRoutine}
          modifyRoutine={modifyRoutine}
          removeRoutine={removeRoutine}
          routine={data}
        />
      </div>
    </ArticleTemplate>
  );
}
