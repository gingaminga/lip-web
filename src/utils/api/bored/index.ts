import { AxiosBase } from "axios-classification";
import { URL } from "@/utils/api/url";

const config = {
  baseURL: URL.BORED.HOST,
};

const Bored = new AxiosBase(config);

export default Bored;
