import SubTitle from "@/components/common/molecules/SubTitle";

/**
 * @description 내 정보 컴포넌트
 */
export default function MyInfo() {
  return (
    <section>
      <SubTitle title="내 정보" />
      <button className="btn max-sm:btn-sm" type="button">
        닉네임 변경하기
      </button>
    </section>
  );
}
