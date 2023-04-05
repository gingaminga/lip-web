import Bored from "@/utils/api/bored";
import { IResponseActivityData, fetchGetActivity } from "@/utils/api/bored/util";
import { TAxiosResponse } from "axios-classification";

describe("Fetch get activity API test :)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Should API failure", async () => {
    // given
    const error = new Error("API Error");
    jest.spyOn(Bored, "get").mockRejectedValue(error);

    // when
    // then
    await expect(fetchGetActivity()).rejects.toThrowError(error);
  });

  test("Should API success", async () => {
    // given
    const data = {
      activity: "",
      accessibility: 0,
      type: "",
      participants: 0,
      price: 0,
      link: "",
      key: "key",
    } as IResponseActivityData;

    const axiosResponse = {
      data,
    } as TAxiosResponse;

    jest.spyOn(Bored, "get").mockResolvedValue(axiosResponse);

    // when
    const result = await fetchGetActivity();

    // then
    expect(result).toEqual(data);
  });
});
