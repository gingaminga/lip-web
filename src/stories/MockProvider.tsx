import "@/styles/globals.css";
import queryClient from "@/utils/query-client";
import store from "@/store";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

export default function MockProvider({ children }: any) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
}
