import Bored from "@/utils/api/bored";
import { URL } from "@/utils/api/url";

interface IActivityData {
  activity: string;
  accessibility: number;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
}

export const getActivity = async () => {
  const endpoint = URL.BORED.PATH.ACTIVITY;

  const { data } = await Bored.get<undefined, IActivityData>(endpoint);

  return data;
};
