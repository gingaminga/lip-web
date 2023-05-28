import { ReactNode } from "react";

interface IArticleTemplate {
  children: ReactNode;
}

/**
 * @description article 공통 영역 템플릿 컴포넌트
 */
export default function ArticleTemplate({ children }: IArticleTemplate) {
  return (
    <article className="w-full h-full flex justify-center relative">
      <div className="w-full max-w-3xl h-full absolute">{children}</div>
    </article>
  );
}
