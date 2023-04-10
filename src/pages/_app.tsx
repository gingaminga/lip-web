import "@/styles/globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import store from "@/store";
import queryClient from "@/utils/query-client";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";

/**
 * @description 고정 컴포넌트
 */
function FixedComponent() {
  return (
    <div className="fixed right-5 top-5">
      <ThemeToggle />
    </div>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <FixedComponent />
        <Component {...pageProps} />
        <ReactQueryDevtools position="bottom-left" />
      </QueryClientProvider>
    </Provider>
  );
}
