import Main from "@/components/Main";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sample</title>
      </Head>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="w-md space-y-4">
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}
