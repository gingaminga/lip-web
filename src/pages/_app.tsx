import "@/styles/globals.css";
import "@/utils/api/lip/interceptor";
import WrapperCommonComponent from "@/components/WrapperCommonComponent";
import store from "@/store";
import queryClient from "@/utils/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App(props: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <WrapperCommonComponent {...props} />
        <ReactQueryDevtools position="bottom-left" />
      </QueryClientProvider>
    </Provider>
  );
}
