import ActivityMain from "@/components/ActivityMain";
import ThemeToggle from "@/components/ThemeToggle";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sample</title>
      </Head>
      <div className="fixed right-5 top-5">
        <ThemeToggle />
      </div>
      <div className="hero h-screen">
        <div className="hero-content flex-col text-center">
          <ActivityMain />
        </div>
      </div>
    </>
  );
}
