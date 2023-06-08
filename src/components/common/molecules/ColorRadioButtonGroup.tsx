import { ROUTINE_THEME_COLOR } from "@/utils/color";

interface IColorRadioButtonGroup {
  changeEvent: (color: string) => void;
  currentColor: string;
}

/**
 * @description 색상 선택 라디오 버튼 그룹 컴포넌트
 */
export default function ColorRadioButtonGroup({ changeEvent, currentColor }: IColorRadioButtonGroup) {
  return (
    <div className="flex flex-wrap justify-center w-full gap-5">
      {ROUTINE_THEME_COLOR.map((config) => {
        const { backgroundColor, checkedBackgroundColor } = config;
        const className = `radio ${backgroundColor} ${checkedBackgroundColor}`;

        const onChange = () => {
          changeEvent(backgroundColor);
        };

        return (
          <input
            checked={currentColor === backgroundColor}
            key={`color-radio-${backgroundColor}`}
            onChange={onChange}
            type="radio"
            className={className}
          />
        );
      })}
    </div>
  );
}