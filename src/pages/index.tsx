import ThemeToggle from "@/components/ThemeToggle";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>life is plan</title>
      </Head>
      <div className="fixed right-5 top-5">
        <ThemeToggle />
      </div>
    </>
  );
}
