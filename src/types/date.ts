export type TDaysOfWeek = "sun" | "mon" | "tue" | "wed" | "thr" | "fri" | "sat";

export type TActvieStatusByDay = {
  [key in TDaysOfWeek]: boolean;
};
