import ScrollablePicker from "@/components/common/molecules/ScrollablePicker";
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

const HOURS = [...Array(24)].map((value, index) => _.padStart(String(index), 2, "0"));
const MINUTES = [...Array(60)].map((value, index) => _.padStart(String(index), 2, "0"));
const SECONDS = [...Array(60)].map((value, index) => _.padStart(String(index), 2, "0"));

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
    <div className="flex justify-center gap-3">
      {isUseHours && <ScrollablePicker data={HOURS} getNewContent={getNewHours} />}
      {isUseMinutes && <ScrollablePicker data={MINUTES} getNewContent={getNewMinutes} />}
      {isUseSeconds && <ScrollablePicker data={SECONDS} getNewContent={getNewSeconds} />}
    </div>
  );
}
