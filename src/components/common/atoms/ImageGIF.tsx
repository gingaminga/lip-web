import Image, { StaticImageData } from "next/image";

interface IImageGIF {
  alt: string;
  src: StaticImageData;
  width?: number;
}

/**
 * @description gif로 동작하는 컴포넌트
 */
export default function ImageGIF({ alt, src, width = 100 }: IImageGIF) {
  return <Image src={src} alt={alt} width={width} />;
}
