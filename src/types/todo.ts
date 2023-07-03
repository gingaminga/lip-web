import { IAlarmData } from "@/types/alarm";

export interface IToDoData {
  alarm: IAlarmData | null;
  checked: boolean;
  content: string;
  createdAt: string;
  date: string;
  id: number;
  updatedAt: string;
}

export interface IRouTineToDoData extends IToDoData {
  routineID: number;
}

export interface ICalendarToDoData {
  achievementRate: number;
  date: number;
  day: number;
  month: number;
  year: number;
}
