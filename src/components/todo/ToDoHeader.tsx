import { getDayString, getYYYYMMDD } from "@/utils/date";
import { useCallback } from "react";

interface IToDoHeader {
  date: Date;
  successCount: number; // 완료 수
  totalCount: number; // 전체 수
}

/**
 * @description 할 일에 대한 제목 컴포넌트
 */
export default function ToDoHeader({ date, successCount, totalCount }: IToDoHeader) {
  let achievementRate = 0;

  if (totalCount) {
    achievementRate = Math.floor((successCount / totalCount) * 100); // 비율
  }

  let achievementRateTextColor = "text-success";
  let smileText = ":)";

  if (achievementRate < 1) {
    achievementRateTextColor = "";
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

  /**
   * @description 응원 문구 텍스트 부분
   */
  const CheeringTextView = useCallback(() => {
    if (totalCount < 1) {
      return <span>여유로운 것도 좋아요.</span>;
    }

    return (
      <span>
        {totalCount}개 중 <span className={`${achievementRateTextColor}`}>{successCount}개</span> 끝냈어요. {smileText}
      </span>
    );
  }, [achievementRateTextColor, smileText, successCount, totalCount]);

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
      <h5 className="text-sm font-semibold mt-3 max-xs:hidden">{CheeringTextView()}</h5>
    </hgroup>
  );
}
