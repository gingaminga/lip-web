import ThemeToggle from "@/components/ThemeToggle";
import { AppProps } from "next/app";

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

/**
 * @description 공통적으로 사용될 컴포넌트들을 묶어놓은 컴포넌트
 */
export default function WrapperCommonComponent({ Component, pageProps }: AppProps) {
  return (
    <>
      <FixedComponent />
      <Component {...pageProps} />
    </>
  );
}
