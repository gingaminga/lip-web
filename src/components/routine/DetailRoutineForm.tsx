import { ChangeEvent, useState } from "react";
import ColorRadioButtonGroup from "@/components/common/molecules/ColorRadioButtonGroup";
import DayOfWeekToggleButtonGroup from "@/components/common/molecules/DayOfWeekToggleButtonGroup";
import SubTitle from "@/components/common/molecules/SubTitle";
import ConfirmModal from "@/components/common/organisms/ConfirmModal";
import TimePicker from "@/components/common/organisms/TimePicker";
import useDayOfWeek from "@/hooks/useDayOfWeek";
import useModal from "@/hooks/useModal";
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
  removeRoutine: (id: number) => void;
  routine?: IRoutineData;
}

/**
 * @description 상세 루틴 form 컴포넌트
 */
export default function DetailRoutineForm({ addRoutine, modifyRoutine, removeRoutine, routine }: IDetailRoutineForm) {
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
  const { closeModal, isOpenModal, openModal } = useModal();

  const isAddForm = routineID < 1; // 추가 화면 형식인지 여부

  /**
   * @description 팝업 오픈 이벤트
   */
  const openWithdrawalModal = () => {
    openModal();
  };

  /**
   * @description 삭제 확인 버튼 이벤트
   */
  const confirmRemoveButtonEvent = () => {
    if (!isAddForm) {
      removeRoutine(routineID);
    }
  };

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

    if (isAddForm) {
      // 추가
      addRoutine(content, days, color, hours, minutes);
      return;
    }

    modifyRoutine(routineID, content, days, color, hours, minutes);
  };

  /**
   * @description 삭제 버튼 뷰 (추가 화면인 경우 삭제 버튼 안 보임)
   */
  const removeButtonView = () => {
    if (isAddForm) {
      return null;
    }

    return (
      <button className="btn btn-ghost btn-xs text-neutral-400" onClick={openWithdrawalModal} type="button">
        삭제
      </button>
    );
  };

  return (
    <>
      <div className="w-full h-full pt-3 pr-2">
        <section className="mb-5 max-sm:mb-3">
          <SubTitle
            title="루틴 이름"
            titleStyles={{
              size: ["text-lg", "max-sm:text-sm"],
            }}
          />
          <label className="label" htmlFor="change-content">
            <input
              className="input input-bordered w-full max-sm:input-sm"
              id="change-content"
              placeholder="어떤 일을 반복할까요?"
              type="text"
              onChange={enterContent}
              value={content}
            />
          </label>
        </section>
        <section className="mb-5 max-sm:mb-3">
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
        <section className="mb-5 max-sm:mb-3">
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
        <section className="mb-5 max-sm:mb-3">
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
        <div className="divider max-sm:mt-1 max-sm:mb-1" />
        <div className={`flex ${isAddForm ? "justify-end" : "justify-between"}`}>
          {removeButtonView()}
          <div className="flex gap-3 max-sm:gap-1">
            <button className="btn max-sm:btn-xs" onClick={_.debounce(resultButtonEvent, 800)} type="button">
              {isAddForm ? "추가" : "수정"}
            </button>
            <button className="btn max-sm:btn-xs" onClick={_.debounce(cancleButtonEvent, 800)} type="button">
              취소
            </button>
          </div>
        </div>
      </div>
      <ConfirmModal
        isOpen={isOpenModal}
        isShowCancleButton
        isShowConfirmButton
        onCloseEvent={closeModal}
        onConfirmEvent={confirmRemoveButtonEvent}
      >
        <p className="p-4">
          작성했던 루틴은 전부 삭제되며 복구할 수 없어요.
          <br />
          정말 삭제할까요?
        </p>
      </ConfirmModal>
    </>
  );
}
