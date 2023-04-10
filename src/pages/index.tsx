import ActivityMain from "@/components/ActivityMain";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sample</title>
      </Head>
      <div className="hero h-screen">
        <div className="hero-content flex-col text-center">
          <ActivityMain />
        </div>
      </div>
    </>
  );
}
