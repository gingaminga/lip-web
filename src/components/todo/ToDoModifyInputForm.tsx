import { IToDoData } from "@/types/todo";
import _ from "lodash";
import { KeyboardEvent, useEffect, useRef } from "react";

interface IToDoModifyInputForm {
  cancleButtonEvent: () => void;
  isLoadingModifyToDo: boolean;
  modifyToDoItemEvent: (id: number, content: string) => void;
  todoItem: IToDoData;
}

/**
 * @description 할 일 수정 input form 컴포넌트
 */
export default function ToDoModifyInputForm({
  cancleButtonEvent,
  isLoadingModifyToDo,
  modifyToDoItemEvent,
  todoItem,
}: IToDoModifyInputForm) {
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * @description 취소 버튼 클릭 이벤트
   */
  const cancleButtonClickEvent = () => {
    cancleButtonEvent();
  };

  /**
   * @description 수정 버튼 클릭 이벤트
   */
  const modifyButtonClickEvent = () => {
    const content = inputRef.current?.value || "";

    if (!content) {
      return;
    }

    modifyToDoItemEvent(todoItem.id, content);
  };

  /**
   * @description input box onkeyup 이벤트
   * @param e 키보드 이벤트
   */
  const inputBoxKeyUpEvent = (e: KeyboardEvent<HTMLInputElement>) => {
    const { code } = e;

    if (code === "Enter") {
      // 엔터 입력 시 할 일 추가하기
      modifyButtonClickEvent();
    }
  };

  /**
   * @description 수정될 값 넣어주기
   */
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = todoItem.content;
      inputRef.current.focus();
    }
  }, [todoItem.content]);

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
          className={`btn ${isLoadingModifyToDo ? "loading" : ""} max-lg:btn-sm`}
          onClick={_.debounce(modifyButtonClickEvent, 500)}
          type="button"
        >
          {isLoadingModifyToDo ? "" : "수정"}
        </button>
        <button className="btn max-lg:btn-sm" onClick={cancleButtonClickEvent} type="button">
          취소
        </button>
      </div>
    </div>
  );
}
