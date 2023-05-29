import SubTitle from "@/components/common/molecules/SubTitle";

/**
 * @description 컨텐츠 삭제 컴포넌트
 */
export default function RemoveContent() {
  return (
    <section>
      <SubTitle title="비우기" />
      <div className="flex gap-2 flex-wrap">
        <button className="btn max-sm:btn-sm" type="button">
          할 일 전부 비우기
        </button>
        <button className="btn max-sm:btn-sm" type="button">
          루틴 전부 비우기
        </button>
      </div>
    </section>
  );
}
