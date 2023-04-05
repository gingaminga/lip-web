import { ReactNode } from "react";
import { Provider } from "react-redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import { MockStoreEnhanced } from "redux-mock-store";

export const getWrapperPrivder = (store: MockStoreEnhanced<unknown, any>) =>
  function MockProvider({ children }: { children: ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  };
