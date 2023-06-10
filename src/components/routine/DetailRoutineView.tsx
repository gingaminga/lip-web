import ArticleTemplate from "@/components/common/templates/ArticleTemplate";
import DetailRoutine from "@/components/form/DetailRoutineForm";

interface IDetailRoutineView {
  routineID?: number; // 루틴 id
}

export default function DetailRoutineView({ routineID }: IDetailRoutineView) {
  console.log("routine id", routineID);

  return (
    <ArticleTemplate>
      <DetailRoutine />
    </ArticleTemplate>
  );
}
