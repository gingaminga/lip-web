interface ISubTitleStyle {
  fontWeight?: string;
  marginBottom?: string;
  size?: string[];
}

interface ISubTitle {
  description?: string; // 설명
  descriptionStyles?: ISubTitleStyle;
  title: string; // 부제목
  titleStyles?: ISubTitleStyle;
}

/**
 * @description 부제목 컴포넌트
 */
export default function SubTitle({ description, descriptionStyles, title, titleStyles }: ISubTitle) {
  const {
    fontWeight: titleFontWeight = "font-bold",
    marginBottom: titleMarginBottom = description ? "mb-0" : "mb-2",
    size: titleSize = ["text-xl", "max-lg:text-base"],
  } = titleStyles || {};
  const {
    fontWeight: descriptionFontWeight = "font-medium",
    marginBottom: descriptionMarginBottom = "mb-4",
    size: descriptionSize = ["text-sm", "max-lg:text-xs"],
  } = descriptionStyles || {};

  const titleSizes = titleSize.join(" ");
  const descriptionSizes = descriptionSize.join(" ");

  const titleClassName = `${titleFontWeight} ${titleMarginBottom} ${titleSizes} `;
  const descriptionClassName = `${descriptionFontWeight} ${descriptionMarginBottom} ${descriptionSizes} `;

  return (
    <>
      <h2 className={titleClassName}>{title}</h2>
      {description && <h3 className={descriptionClassName}>{description}</h3>}
    </>
  );
}
