import { timeout } from "@/utils";
import Bored from "@/utils/api/bored";
import { URL } from "@/utils/api/url";

export interface IResponseActivityData {
  activity: string;
  accessibility: number;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
}

/**
 * @description 활동 추천받기(가져오기)
 */
export const fetchGetActivity = async () => {
  const endpoint = URL.BORED.PATH.ACTIVITY;

  const { data } = await Bored.get<undefined, IResponseActivityData>(endpoint);

  timeout();

  return data;
};
