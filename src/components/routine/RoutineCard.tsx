import Card from "@/components/common/atoms/Card";
import Link from "next/link";

export type TBackgroundColor =
  | "slate"
  | "rose"
  | "stone"
  | "orange"
  | "amber"
  | "lime"
  | "emerald"
  | "sky"
  | "indigo"
  | "violet"
  | "purple";

interface IRoutineCardStyles {
  backgroundColor: TBackgroundColor;
}

interface IRoutineCard {
  path: string;
  styles?: IRoutineCardStyles;
  title: string;
}

/**
 * @description 루틴 카드 컴포넌트
 */
export default function RoutineCard({ path, styles, title }: IRoutineCard) {
  const { backgroundColor } = styles || {};

  const colorClassName = `h-1/3 rounded-t-[inherit]${backgroundColor ? ` bg-${backgroundColor}-300` : ""}`;

  return (
    <Link href={path}>
      <Card
        styles={{
          width: "w-52",
          height: "h-60",
        }}
      >
        <div className={colorClassName} />
        <div className="card-body h-2/3">
          <h2 className="card-title">{title}</h2>
          <p>{title}</p>
        </div>
      </Card>
    </Link>
  );
}
