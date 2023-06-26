import Card from "@/components/common/atoms/Card";
import { TRoutineColor } from "@/types/color";
import { TElementRefItem } from "@/types/common";
import { TActvieStatusByDay } from "@/types/date";
import { getDayOfText } from "@/utils/date";
import Link from "next/link";

interface IRoutineCardStyles {
  themeColor: TRoutineColor;
}

interface IRoutineCard {
  alarmHour: number;
  alarmMinute: number;
  days: TActvieStatusByDay;
  innerRef?: TElementRefItem<HTMLDivElement>;
  path: string;
  styles?: IRoutineCardStyles;
  title: string;
}

/**
 * @description 루틴 카드 컴포넌트
 */
export default function RoutineCard({ alarmHour, alarmMinute, days, innerRef, path, styles, title }: IRoutineCard) {
  const { themeColor = "bg-current" } = styles || {};
  const colorClassName = `h-1/3 rounded-t-[inherit] ${themeColor}`;
  const daysOfText = getDayOfText(days);
  const alarmInfo = `${alarmHour}시${!alarmMinute ? "" : ` ${alarmMinute}분`}`;

  return (
    <Link href={path}>
      <Card
        innerRef={innerRef}
        styles={{
          width: "w-52",
          height: "h-60",
        }}
      >
        <div className={colorClassName} />
        <div className="card-body h-2/3">
          <h2 className="card-title">{title}</h2>
          <p className="flex items-center">
            <span className="font-semibold">
              {daysOfText} <span className="underline font-thin">{alarmInfo}</span>
            </span>
          </p>
        </div>
      </Card>
    </Link>
  );
}
