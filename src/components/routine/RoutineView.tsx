import ArticleTemplate from "@/components/common/templates/ArticleTemplate";
import RoutineCard, { TBackgroundColor } from "@/components/routine/RoutineCard";

const backgroundColor: TBackgroundColor[] = [
  "slate",
  "rose",
  "stone",
  "orange",
  "amber",
  "lime",
  "emerald",
  "sky",
  "indigo",
  "violet",
  "purple",
];

/**
 * @deprecated 샘플 할일 배열
 */
const TEMP_ROUTINES = [...Array(30)].map((value, index) => ({
  themeColor: backgroundColor[Math.floor(Math.random() * 1000) % backgroundColor.length],
  id: index + 1,
  title: "Temp title",
}));

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
                backgroundColor: themeColor,
              }}
              title={title}
            />
          );
        })}
      </div>
    </ArticleTemplate>
  );
}
