import useThemeChanger from "@/hooks/useThemeChanger";
import { setTheme } from "@/store/theme/reducer";
import { getWrapperPrivder } from "@/utils/MockProvider";
import { act, renderHook } from "@testing-library/react";
import type { ChangeEvent } from "react";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({
  theme: {
    value: "light",
  },
});

describe("useThemeChanger hook test :)", () => {
  let theme: "light" | "dark";

  beforeEach(() => {
    theme = "light";
    jest.clearAllMocks();
    store.clearActions();
  });

  test("Should toggle light theme", () => {
    // given
    const { result } = renderHook(() => useThemeChanger(), { wrapper: getWrapperPrivder(store) });

    // when
    const event = {
      target: {
        checked: false,
      },
    } as ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.toggleHandler(event);
    });

    // then
    expect(localStorage.getItem("theme")).toBe(theme);
    expect(document.documentElement.getAttribute("data-theme")).toBe(theme);

    const expectedAction = setTheme(theme);
    expect(store.getActions()).toEqual([expectedAction]);
  });

  test("Should toggle dark theme", () => {
    // given
    theme = "dark";
    const { result } = renderHook(() => useThemeChanger(), { wrapper: getWrapperPrivder(store) });

    // when
    const event = {
      target: {
        checked: true,
      },
    } as ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.toggleHandler(event);
    });

    // then
    expect(localStorage.getItem("theme")).toBe(theme);
    expect(document.documentElement.getAttribute("data-theme")).toBe(theme);

    const expectedAction = setTheme(theme);
    expect(store.getActions()).toEqual([expectedAction]);
  });
});
