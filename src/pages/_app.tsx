import "@/styles/globals.css";
import "@/utils/api/lip/interceptor";
import WrapperCommonComponent from "@/components/WrapperCommonComponent";
import store from "@/store";
import queryClient from "@/utils/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

export default function App(props: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Head>
        <WrapperCommonComponent {...props} />
        <ReactQueryDevtools position="bottom-left" />
      </QueryClientProvider>
    </Provider>
  );
}
