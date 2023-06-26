import { ChangeEvent, useState } from "react";
import ColorRadioButtonGroup from "@/components/common/molecules/ColorRadioButtonGroup";
import DayOfWeekToggleButtonGroup from "@/components/common/molecules/DayOfWeekToggleButtonGroup";
import SubTitle from "@/components/common/molecules/SubTitle";
import TimePicker from "@/components/common/organisms/TimePicker";
import useDayOfWeek from "@/hooks/useDayOfWeek";
import useTimePicker from "@/hooks/useTimePicker";
import { IRoutineData } from "@/types/routine";
import { TRoutineColor } from "@/types/color";
import { checkRoutineColor } from "@/types/guard";
import { getNumberDaysFromActiveByDay } from "@/utils/date";
import _ from "lodash";
import { useRouter } from "next/router";

interface IDetailRoutineForm {
  addRoutine: (content: string, days: string, color: TRoutineColor, alarmHour: number, alarmMinute: number) => void;
  modifyRoutine: (
    id: number,
    content: string,
    days: string,
    color: TRoutineColor,
    alarmHour: number,
    alarmMinute: number,
  ) => void;
  routine?: IRoutineData;
}

/**
 * @description 상세 루틴 form 컴포넌트
 */
export default function DetailRoutineForm({ addRoutine, modifyRoutine, routine }: IDetailRoutineForm) {
  const {
    id: routineID = -1,
    alarm,
    color: defaultColor = "",
    content: defaultContent = "",
    friday = false,
    monday = false,
    saturday = false,
    sunday = false,
    thursday = false,
    tuesday = false,
    wednesday = false,
  } = routine || {};
  const { hour: defaultAlarmHour = 0, minute: defaultAlarmMinute = 0 } = alarm || {};

  const defaultDays = {
    fri: friday,
    mon: monday,
    sat: saturday,
    sun: sunday,
    thu: thursday,
    tue: tuesday,
    wed: wednesday,
  };

  const defaultTime = {
    hours: defaultAlarmHour,
    minutes: defaultAlarmMinute,
    seconds: 0,
  };

  const [content, setContent] = useState(defaultContent);
  const [color, setColor] = useState<string>(defaultColor);
  const { daysOfWeek, toggleDayOfWeek } = useDayOfWeek(defaultDays);
  const { changeHours, changeMinutes, hours, minutes } = useTimePicker(defaultTime);
  const { push } = useRouter();

  /**
   * @description 루틴 내용 입력하기
   * @param e 변경 이벤트
   */
  const enterContent = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setContent(value);
  };

  /**
   * @description 색상 변경하기
   * @param newColor 색상
   */
  const changeColor = (newColor: string) => {
    setColor(newColor);
  };

  /**
   * @description 취소 버튼 이벤트
   */
  const cancleButtonEvent = () => {
    push("/routine");
  };

  /**
   * @description 추가/수정 버튼 이벤트
   * @returns
   */
  const resultButtonEvent = () => {
    if (!checkRoutineColor(color)) {
      return;
    }
    const days = getNumberDaysFromActiveByDay(daysOfWeek);

    if (routineID > 0) {
      // 수정

      modifyRoutine(routineID, content, days, color, hours, minutes);
      return;
    }

    addRoutine(content, days, color, hours, minutes);
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
        <div className="w-full flex justify-center">
          <DayOfWeekToggleButtonGroup daysOfWeek={daysOfWeek} toggleEvent={toggleDayOfWeek} />
        </div>
      </section>
      <section className="mb-5">
        <SubTitle
          description="몇 시에 알려줄까요?"
          title="알람"
          titleStyles={{
            size: ["text-lg", "max-sm:text-sm"],
          }}
        />
        <div className="w-full flex justify-center">
          <TimePicker
            changeHours={changeHours}
            changeMinutes={changeMinutes}
            hours={hours}
            isUseSeconds={false}
            minutes={minutes}
          />
        </div>
      </section>
      <section className="mb-5">
        <SubTitle
          description="루틴을 기억해요. :)"
          title="색상"
          titleStyles={{
            size: ["text-lg", "max-sm:text-sm"],
          }}
        />
        <div className="w-full flex justify-center">
          <ColorRadioButtonGroup changeEvent={changeColor} currentColor={color} />
        </div>
      </section>
      <div className="divider" />
      <div className="flex justify-end gap-3">
        <button className="btn max-sm:btn-sm" onClick={_.debounce(resultButtonEvent, 800)} type="button">
          {routineID > 0 ? "수정" : "추가"}
        </button>
        <button className="btn max-sm:btn-sm" onClick={_.debounce(cancleButtonEvent, 800)} type="button">
          취소
        </button>
      </div>
    </div>
  );
}
