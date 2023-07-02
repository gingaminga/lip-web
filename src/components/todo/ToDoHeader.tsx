import { getDayString, getYYYYMMDD } from "@/utils/date";

interface IToDoHeader {
  date: Date;
  successCount: number; // 완료 수
  totalCount: number; // 전체 수
}

/**
 * @description 할 일에 대한 제목 컴포넌트
 */
export default function ToDoHeader({ date, successCount, totalCount }: IToDoHeader) {
  const achievementRate = Math.floor((successCount / totalCount) * 100); // 비율

  let achievementRateTextColor = "text-success";
  let smileText = ":)";

  if (achievementRate < 1) {
    achievementRateTextColor = "text-neutral-400";
    smileText = "";
  } else if (achievementRate < 40) {
    achievementRateTextColor = "text-rose-400";
    smileText = ":(";
  } else if (achievementRate < 70) {
    achievementRateTextColor = "text-warning";
    smileText = ":-|";
  } else if (achievementRate < 100) {
    achievementRateTextColor = "text-accent";
    smileText = ":)";
  }

  return (
    <hgroup className="flex flex-col flex-wrap w-full">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">{getYYYYMMDD(". ", date)}</h1>
          <h3 className="text-xl">{getDayString(date)}.</h3>
        </div>
        <div
          className={`radial-progress ${achievementRateTextColor} mt-2 max-xs:hidden`}
          style={{
            "--value": achievementRate,
            "--size": "4rem",
          }}
        >
          <span className="text-sm">{achievementRate}%</span>
        </div>
      </div>
      <h5 className="text-sm font-semibold mt-3 max-xs:hidden">
        {totalCount}개 중 <span className={`${achievementRateTextColor}`}>{successCount}개</span> 끝냈어요. {smileText}
      </h5>
    </hgroup>
  );
}
