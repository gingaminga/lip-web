import constants from "@/utils/constants";
import Head from "next/head";

interface IHeaderTemplate {
  description?: string;
  projectName?: string;
  title?: string;
  url?: string;
}

/**
 * @description 헤더 템플릿 컴포넌트
 */
export default function HeaderTemplate({
  description = "계획의 중요성을 느껴봐요 :)",
  projectName = "Life Is Plan",
  title = "계획적인 삶",
  url = constants.LIP.HOST,
}: IHeaderTemplate) {
  return (
    <Head>
      <meta name="description" content={description} />
      <title>{title}</title>
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/images/life-is-plan-logo-text-310x310.png" />
      <meta property="og:site_name" content={projectName} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
    </Head>
  );
}
