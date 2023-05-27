import ToDoAdd from "@/components/common/molecules/ToDoAdd";
import ToDoHeader from "@/components/common/molecules/ToDoHeader";
import ToDoList from "@/components/common/molecules/ToDoList";
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

  return (
    <article className="w-full h-full flex justify-center relative">
      <div className="w-full max-w-3xl h-full absolute">
        <div className="h-28">
          <ToDoHeader date={date} successCount={successToDoCount} totalCount={totalToDoCount} />
        </div>
        <div className="h-14 max-sm:h-10">
          <ToDoAdd />
        </div>
        <div className="h-[calc(100%-7rem-3.5rem)] max-sm:h-[calc(100%-7rem-2.5rem)] overflow-auto">
          <ToDoList toggleToDoItemEvent={toggleToDoItemEvent} todos={todos} />
        </div>
      </div>
    </article>
  );
}
