import SubTitle from "@/components/common/molecules/SubTitle";
import NicknameChangerForm from "@/components/setting/NicknameChangerForm";

interface INicknameChanger {
  onCancleEvent: () => void;
}

/**
 * @description 닉네임 변경 컴포넌트
 */
export default function NicknameChanger({ onCancleEvent }: INicknameChanger) {
  /**
   * @description 닉네임 중복 검사
   * @param nickname 닉네임
   */
  const duplicateNickname = (nickname: string) => {
    console.log("duplicate nickname", nickname);
  };

  /**
   * @description 닉네임 변경
   * @param nickname 닉네임
   */
  const changeNickname = (nickname: string) => {
    console.log("change nickname", nickname);
  };

  return (
    <section className="mb-36">
      <SubTitle title="닉네임 변경" />
      <NicknameChangerForm
        onCancleEvent={onCancleEvent}
        onConfirmEvent={changeNickname}
        onFocusOutEvent={duplicateNickname}
        placeholder="변경할 닉네임을 입력해주세요."
      />
    </section>
  );
}
