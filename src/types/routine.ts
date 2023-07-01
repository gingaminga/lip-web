import { IAlarmData } from "@/types/alarm";
import { TRoutineColor } from "@/types/color";

export interface IRoutineData {
  alarm: IAlarmData;
  content: string;
  color: TRoutineColor;
  createdAt: string;
  friday: boolean;
  id: number;
  monday: boolean;
  saturday: boolean;
  sunday: boolean;
  thursday: boolean;
  tuesday: boolean;
  updatedAt: string;
  wednesday: boolean;
}
