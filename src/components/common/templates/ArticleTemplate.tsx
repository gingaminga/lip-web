import { ReactNode } from "react";

interface IArticleTemplateContentStyles {
  maxWidth?: string;
}

interface IArticleTemplate {
  children: ReactNode;
  contentStyles?: IArticleTemplateContentStyles;
}

/**
 * @description article 공통 영역 템플릿 컴포넌트
 */
export default function ArticleTemplate({ children, contentStyles }: IArticleTemplate) {
  const { maxWidth = "max-w-3xl" } = contentStyles || {};

  const contentClassName = `w-full ${maxWidth} h-full absolute`;

  return (
    <article className="w-full h-full flex justify-center relative">
      <div className={contentClassName}>{children}</div>
    </article>
  );
}
