import type { IResponseActivityData } from "@/utils/api/bored/util";

export type TActivityData = Pick<IResponseActivityData, "activity" | "key" | "price">;
