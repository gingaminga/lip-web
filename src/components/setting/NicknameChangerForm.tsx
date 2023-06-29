import { FocusEvent, useRef } from "react";

interface INicknameChangerForm {
  onCancleEvent: () => void;
  onConfirmEvent: (nickname: string) => void;
  onFocusOutEvent: (nickname: string) => void;
  placeholder?: string;
  validateMessage: string;
  validateStatus: boolean;
}

/**
 * @description 닉네임 변경 폼 컴포넌트
 */
export default function NicknameChangerForm({
  onCancleEvent,
  onConfirmEvent,
  onFocusOutEvent,
  placeholder,
  validateMessage,
  validateStatus,
}: INicknameChangerForm) {
  const nicknameInputRef = useRef<HTMLInputElement>(null);

  const validatorLabelClassName = `h-8 label label-text-alt font-bold justify-end ${
    validateStatus ? "text-success" : "text-error"
  }`;

  /**
   * @description 닉네임 중복검사하기
   * @param e 포커스 이벤트
   */
  const duplicateNickname = (e: FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onFocusOutEvent(value);
  };

  /**
   * @description 닉네임 변경하기
   */
  const changeNickname = () => {
    const nickname = nicknameInputRef.current?.value || "";

    if (!nickname) {
      return;
    }

    onConfirmEvent(nickname);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="form-control w-full">
        <label className="label" htmlFor="change-nickname">
          <input
            className="input input-bordered w-full"
            id="change-nickname"
            onBlur={duplicateNickname}
            placeholder={placeholder}
            type="text"
          />
        </label>
        <span className={validatorLabelClassName}>{validateMessage}</span>
        <div className="flex justify-end gap-3">
          <button className="btn max-sm:btn-sm" onClick={changeNickname} type="button">
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
