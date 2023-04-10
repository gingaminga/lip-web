import SocialLoginForm from "@/components/form/SocialLoginForm";
import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>life is plan</title>
      </Head>
      <div className="hero h-screen">
        <div className="hero-content flex-col w-full">
          <SocialLoginForm />
        </div>
      </div>
    </>
  );
}
