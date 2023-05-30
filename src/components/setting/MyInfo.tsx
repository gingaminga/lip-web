import SubTitle from "@/components/common/molecules/SubTitle";

interface IMyInfo {
  nicknameChangerEvent: () => void;
}

/**
 * @description 내 정보 컴포넌트
 */
export default function MyInfo({ nicknameChangerEvent }: IMyInfo) {
  return (
    <section>
      <SubTitle title="내 정보" />
      <button className="btn max-sm:btn-sm" onClick={nicknameChangerEvent} type="button">
        닉네임 변경하기
      </button>
    </section>
  );
}
