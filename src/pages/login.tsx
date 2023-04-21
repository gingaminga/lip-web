import OAuthLoginForm from "@/components/form/OAuthLoginForm";
import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>life is plan</title>
      </Head>
      <div className="hero h-screen">
        <div className="hero-content flex-col w-full">
          <OAuthLoginForm />
        </div>
      </div>
    </>
  );
}
