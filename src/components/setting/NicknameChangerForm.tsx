import { validateNickname } from "@/utils/validator";
import { ChangeEvent, FocusEvent, useState } from "react";

interface INicknameChangerForm {
  onCancleEvent: () => void;
  onConfirmEvent: (nickname: string) => void;
  onFocusOutEvent: (nickname: string) => void;
  placeholder?: string;
}

/**
 * @description 닉네임 변경 폼 컴포넌트
 */
export default function NicknameChangerForm({
  onCancleEvent,
  onConfirmEvent,
  onFocusOutEvent,
  placeholder,
}: INicknameChangerForm) {
  const [nickname, setNickname] = useState("");
  const { message, status } = validateNickname(nickname);

  const validatorLabelClassName = `label label-text-alt justify-end${status ? "" : " text-error"}`;

  /**
   * @description 닉네임 입력하기
   * @param e 변경 이벤트
   */
  const enterNickname = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setNickname(value);
  };

  /**
   * @description 닉네임 입력하기
   * @param e 포커스 이벤트
   */
  const duplicateNickname = (e: FocusEvent<HTMLInputElement>) => {
    if (!status) return;

    onFocusOutEvent(nickname);
  };

  /**
   * @description 닉네임 변경하기
   */
  const changeNickname = () => {
    if (!status) return;

    onConfirmEvent(nickname);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="form-control w-full">
        <label className="label" htmlFor="change-nickname">
          <input
            className="input input-bordered w-full"
            id="change-nickname"
            placeholder={placeholder}
            type="text"
            onBlur={duplicateNickname}
            onChange={enterNickname}
            value={nickname}
          />
        </label>
        <span className={validatorLabelClassName}>{message}</span>
        <div className="flex justify-end gap-3">
          <button className="btn max-sm:btn-sm" type="button" onClick={changeNickname}>
            확인
          </button>
          <button className="btn max-sm:btn-sm" onClick={onCancleEvent} type="button">
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
