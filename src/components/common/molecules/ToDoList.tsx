import ToDoItem from "@/components/common/molecules/ToDoItem";
import { IToDos } from "@/types/todo";

interface IToDoList {
  removeToDoItemEvent: (item: IToDos) => void;
  todos: IToDos[];
  toggleToDoItemEvent: (id: number) => void;
}

/**
 * @description 할 일 리스트 컴포넌트
 */
export default function ToDoList({ removeToDoItemEvent, todos, toggleToDoItemEvent }: IToDoList) {
  return (
    <div className="w-full h-full">
      {todos.map((todo) => {
        const { checked, content, id } = todo;

        const onChange = () => {
          toggleToDoItemEvent(id);
        };

        const removeItem = () => {
          removeToDoItemEvent(todo);
        };

        return (
          <ToDoItem
            content={content}
            id={id}
            isChecked={checked}
            key={`todo-item-${id}-${checked}-${content}`}
            onChange={onChange}
            removeItem={removeItem}
          />
        );
      })}
    </div>
  );
}
