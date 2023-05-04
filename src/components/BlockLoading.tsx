import CircleSpinner from "@/assets/images/circle-spinner.gif";
import ImageGIF from "@/components/common/atoms/ImageGIF";

/**
 * @description 전체 화면 로딩 컴포넌트
 */
export default function BlockLoading() {
  return (
    <div className="hero h-screen">
      <ImageGIF alt="loading" src={CircleSpinner} />
    </div>
  );
}
