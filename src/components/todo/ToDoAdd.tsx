import _ from "lodash";
import { KeyboardEvent, useEffect, useRef } from "react";

interface IToDoAdd {
  addToDoItemEvent: (content: string) => void;
  isLoadingAddToDo: boolean; // 할 일 추가 API 요청 중
  isSuccessAddToDo: boolean; // 할 일 추가 성공 여부
}

/**
 * @description 할 일 추가 컴포넌트
 */
export default function ToDoAdd({ addToDoItemEvent, isLoadingAddToDo, isSuccessAddToDo }: IToDoAdd) {
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * @description 버튼 클릭 이벤트
   */
  const addButtonClickEvent = () => {
    const content = inputRef.current?.value || "";

    if (!content) {
      return;
    }

    addToDoItemEvent(content);
  };

  /**
   * @description input box onkeyup 이벤트
   * @param e 키보드 이벤트
   */
  const inputBoxKeyUpEvent = (e: KeyboardEvent<HTMLInputElement>) => {
    const { code } = e;

    if (code === "Enter") {
      // 엔터 입력 시 할 일 추가하기
      addButtonClickEvent();
    }
  };

  /**
   * @description input에 focus 하기
   */
  useEffect(() => {
    if (!isLoadingAddToDo) {
      inputRef.current?.focus();
    }
  }, [isLoadingAddToDo]);

  /**
   * @description 추가 성공 시 input value 빈 값으로 변경하기
   */
  useEffect(() => {
    if (isSuccessAddToDo && inputRef.current) {
      inputRef.current.value = "";
    }
  }, [isSuccessAddToDo]);

  return (
    <div className="form-control">
      <div className="input-group">
        <input
          className="input input-bordered w-full max-lg:input-sm"
          placeholder="오늘 할 일은?"
          ref={inputRef}
          type="text"
          onKeyUp={_.debounce(inputBoxKeyUpEvent, 500)}
        />
        <button
          className={`btn ${isLoadingAddToDo ? "loading" : ""} max-lg:btn-sm`}
          onClick={_.debounce(addButtonClickEvent, 500)}
          type="button"
        >
          {isLoadingAddToDo ? "" : "추가"}
        </button>
      </div>
    </div>
  );
}
