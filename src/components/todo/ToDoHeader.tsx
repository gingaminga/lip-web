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
  const remainingCount = totalCount - successCount; // 남은 수
  const rate = Math.floor((successCount / totalCount) * 100); // 비율

  return (
    <hgroup className="flex flex-col flex-wrap w-full">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">{getYYYYMMDD(". ", date)}</h1>
          <h3 className="text-xl">{getDayString(date)}.</h3>
        </div>
        <div
          className="radial-progress text-accent mt-2 max-xs:hidden"
          style={{
            "--value": rate,
            "--size": "4rem",
          }}
        >
          <span className="text-sm">{rate}%</span>
        </div>
      </div>
      <h5 className="text-sm text-accent font-semibold mt-3 max-xs:hidden">
        {totalCount}개 중 {remainingCount}개 남았어요.
      </h5>
    </hgroup>
  );
}
