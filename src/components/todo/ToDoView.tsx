import ToDoAdd from "@/components/common/molecules/ToDoAdd";
import ToDoHeader from "@/components/common/molecules/ToDoHeader";
import ToDoList from "@/components/common/molecules/ToDoList";
import ConfirmModal from "@/components/common/organisms/ConfirmModal";
import ArticleTemplate from "@/components/common/templates/ArticleTemplate";
import useModal from "@/hooks/useModal";
import { IToDos } from "@/types/todo";
import { useState } from "react";

interface IToDoView {
  date: Date;
}

/**
 * @deprecated 샘플 할일 배열
 */
const TEMP_TODOS = [...Array(30)].map((value, index) => ({
  checked: false,
  content: `${Math.random() * 1000}`,
  id: index + 1,
}));

export default function ToDoView({ date }: IToDoView) {
  const [todos, setTodos] = useState(TEMP_TODOS);
  const { closeModal, isOpenModal, modalItem, openModal } = useModal<IToDos>();

  const successToDoCount = todos.filter((todo) => todo.checked).length;
  const totalToDoCount = todos.length;

  const toggleToDoItemEvent = (id: number) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => {
        if (id === todo.id) {
          return {
            ...todo,
            checked: !todo.checked,
          };
        }

        return todo;
      }),
    );
  };

  const removeToDoItem = () => {
    console.log("remove todo", modalItem);
  };

  return (
    <>
      <ArticleTemplate>
        <div className="h-28">
          <ToDoHeader date={date} successCount={successToDoCount} totalCount={totalToDoCount} />
        </div>
        <div className="h-14 max-sm:h-10">
          <ToDoAdd />
        </div>
        <div className="h-[calc(100%-7rem-3.5rem)] max-sm:h-[calc(100%-7rem-2.5rem)] overflow-auto">
          <ToDoList removeToDoItemEvent={openModal} toggleToDoItemEvent={toggleToDoItemEvent} todos={todos} />
        </div>
      </ArticleTemplate>
      <ConfirmModal
        isOpen={isOpenModal}
        isShowCancleButton
        isShowConfirmButton
        onCloseEvent={closeModal}
        onConfirmEvent={removeToDoItem}
      >
        <p className="p-2">정말 삭제할까요?</p>
      </ConfirmModal>
    </>
  );
}
