export type TDaysOfWeek = "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";

export type TActvieStatusByDay = {
  [key in TDaysOfWeek]: boolean;
};
