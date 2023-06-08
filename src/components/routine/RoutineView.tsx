import ArticleTemplate from "@/components/common/templates/ArticleTemplate";
import RoutineCard from "@/components/routine/RoutineCard";
import { ROUTINE_THEME_COLOR } from "@/utils/color";

/**
 * @deprecated 샘플 루틴 배열
 */
const TEMP_ROUTINES = [...Array(30)].map((value, index) => {
  const randomIndex = Math.floor(Math.random() * 1000) % ROUTINE_THEME_COLOR.length;

  return {
    id: index + 1,
    themeColor: ROUTINE_THEME_COLOR[randomIndex].backgroundColor,
    title: "Temp title",
  };
});

export default function RoutineView() {
  return (
    <ArticleTemplate
      contentStyles={{
        maxWidth: "max-w-full",
      }}
    >
      <div className="grid grid-cols-[repeat(auto-fill,_15rem)] grid-rows-[repeat(auto-fill,_13rem)] justify-center gap-x-5 gap-y-20 overflow-auto h-full">
        {TEMP_ROUTINES.map((routine) => {
          const { id, themeColor, title } = routine;

          return (
            <RoutineCard
              path={`routine/${id}`}
              key={`routine-card-${id}-${title}`}
              styles={{
                themeColor,
              }}
              title={title}
            />
          );
        })}
      </div>
    </ArticleTemplate>
  );
}
