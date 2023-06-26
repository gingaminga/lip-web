import ScrollablePicker from "@/components/common/molecules/ScrollablePicker";
import { HOURS, MINUTES, SECONDS } from "@/utils/date";
import _ from "lodash";
import { useCallback } from "react";

interface ITimePicker {
  changeHours?: (hours: number) => void;
  changeMinutes?: (minutes: number) => void;
  changeSeconds?: (seconds: number) => void;
  hours?: number;
  isUseHours?: boolean;
  isUseMinutes?: boolean;
  isUseSeconds?: boolean;
  minutes?: number;
  seconds?: number;
}

/**
 * @description 시간 선택 컴포넌트
 */
export default function TimePicker({
  changeHours,
  changeMinutes,
  changeSeconds,
  hours,
  isUseHours = true,
  isUseMinutes = true,
  isUseSeconds = true,
  minutes,
  seconds,
}: ITimePicker) {
  const defaultHourValue = _.padStart(String(hours), 2, "0");
  const defaultMinuteValue = _.padStart(String(minutes), 2, "0");
  const defaultSecondValue = _.padStart(String(seconds), 2, "0");

  const getNewHours = useCallback(
    (content: string) => {
      if (isUseHours && changeHours) {
        changeHours(Number(content));
      }
    },
    [changeHours, isUseHours],
  );

  const getNewMinutes = useCallback(
    (content: string) => {
      if (isUseMinutes && changeMinutes) {
        changeMinutes(Number(content));
      }
    },
    [changeMinutes, isUseMinutes],
  );

  const getNewSeconds = useCallback(
    (content: string) => {
      if (isUseSeconds && changeSeconds) {
        changeSeconds(Number(content));
      }
    },
    [changeSeconds, isUseSeconds],
  );

  return (
    <div className="flex gap-3">
      {isUseHours && <ScrollablePicker data={HOURS} getNewContent={getNewHours} defaultValue={defaultHourValue} />}
      {isUseMinutes && (
        <ScrollablePicker data={MINUTES} getNewContent={getNewMinutes} defaultValue={defaultMinuteValue} />
      )}
      {isUseSeconds && (
        <ScrollablePicker data={SECONDS} getNewContent={getNewSeconds} defaultValue={defaultSecondValue} />
      )}
    </div>
  );
}
