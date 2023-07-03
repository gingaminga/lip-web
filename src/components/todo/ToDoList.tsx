import ToDoItem from "@/components/todo/ToDoItem";
import { IToDoData } from "@/types/todo";
import { ImTongue2 } from "react-icons/im";

interface IToDoList<T extends IToDoData> {
  emptyDescription?: string;
  removeToDoItemEvent?: (item: T) => void;
  setAlarmToDoEvent: (item: T) => void;
  title?: string;
  todos: T[];
  toggleToDoItemEvent: (item: T) => void;
  useRemoveButton?: boolean;
}

/**
 * @description 할 일 리스트 컴포넌트
 */
export default function ToDoList<T extends IToDoData>({
  emptyDescription = "오늘은 무얼 해볼까요?",
  removeToDoItemEvent,
  setAlarmToDoEvent,
  title,
  todos,
  toggleToDoItemEvent,
  useRemoveButton = true,
}: IToDoList<T>) {
  return (
    <div className="w-full">
      {title && <h2 className="w-full bg-base-300 p-4 font-bold sticky top-0 opacity-90 backdrop-blur-xl">{title}</h2>}
      {todos.length < 1 && (
        <span className="flex justify-center items-center p-4 text-neutral-400 text-sm">
          {emptyDescription}&nbsp;
          <ImTongue2 className="text-yellow-400" />
        </span>
      )}
      {todos.map((todo) => {
        const { checked, content, id } = todo;

        const onChange = () => {
          toggleToDoItemEvent(todo);
        };

        const removeItem = () => {
          if (removeToDoItemEvent) {
            removeToDoItemEvent(todo);
          }
        };

        const setAlarm = () => {
          setAlarmToDoEvent(todo);
        };

        return (
          <ToDoItem
            content={content}
            id={id}
            isChecked={checked}
            key={`todo-item-${id}-${checked}-${content}`}
            onChange={onChange}
            removeItem={removeItem}
            setAlarm={setAlarm}
            useRemoveButton={useRemoveButton}
          />
        );
      })}
    </div>
  );
}
