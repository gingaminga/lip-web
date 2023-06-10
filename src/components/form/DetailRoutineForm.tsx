import { ChangeEvent, useState } from "react";
import ColorRadioButtonGroup from "@/components/common/molecules/ColorRadioButtonGroup";
import DayOfWeekToggleButtonGroup from "@/components/common/molecules/DayOfWeekToggleButtonGroup";
import SubTitle from "@/components/common/molecules/SubTitle";
import TimePicker from "@/components/common/organisms/TimePicker";
import useDayOfWeek from "@/hooks/useDayOfWeek";
import useTimePicker from "@/hooks/useTimePicker";

/**
 * @description 상세 루틴 form 컴포넌트
 */
export default function DetailRoutineForm() {
  const [content, setContent] = useState("");
  const [color, setColor] = useState<string>("");
  const { daysOfWeek, toggleDayOfWeek } = useDayOfWeek();
  const { changeHours, changeMinutes, hours, minutes } = useTimePicker();

  /**
   * @description 닉네임 입력하기
   * @param e 변경 이벤트
   */
  const enterContent = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setContent(value);
  };

  /**
   * @description 색상 변경하기
   * @param e 변경 이벤트
   */
  const changeColor = (newColor: string) => {
    setColor(newColor);
  };

  return (
    <div className="w-full h-full">
      <section className="mb-5">
        <SubTitle
          title="루틴 이름"
          titleStyles={{
            size: ["text-lg", "max-sm:text-sm"],
          }}
        />
        <label className="label" htmlFor="change-content">
          <input
            className="input input-bordered w-full"
            id="change-content"
            placeholder="어떤 일을 반복할까요?"
            type="text"
            onChange={enterContent}
            value={content}
          />
        </label>
      </section>
      <section className="mb-5">
        <SubTitle
          description="무슨 요일에 알려줄까요?"
          title="요일"
          titleStyles={{
            size: ["text-lg", "max-sm:text-sm"],
          }}
        />
        <DayOfWeekToggleButtonGroup daysOfWeek={daysOfWeek} toggleEvent={toggleDayOfWeek} />
      </section>
      <section className="mb-5">
        <SubTitle
          description="몇 시에 알려줄까요?"
          title="알람"
          titleStyles={{
            size: ["text-lg", "max-sm:text-sm"],
          }}
        />
        <TimePicker
          changeHours={changeHours}
          changeMinutes={changeMinutes}
          hours={hours}
          isUseSeconds={false}
          minutes={minutes}
        />
      </section>
      <section className="mb-5">
        <SubTitle
          description="루틴을 기억해요. :)"
          title="색상"
          titleStyles={{
            size: ["text-lg", "max-sm:text-sm"],
          }}
        />
        <ColorRadioButtonGroup changeEvent={changeColor} currentColor={color} />
      </section>
    </div>
  );
}
