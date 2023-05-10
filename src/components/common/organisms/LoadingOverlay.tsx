import CircleSpinner from "@/assets/images/circle-spinner.svg";

/**
 * @description 전체화면 로딩 컴포넌트
 */
export default function LoadingOverlay() {
  return (
    <div className="hero h-screen">
      <CircleSpinner className="w-20 h-20" />
    </div>
  );
}
