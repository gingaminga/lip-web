import ToDoItem from "./ToDoItem";

interface IToDos {
  checked: boolean;
  content: string;
  id: number;
}

interface IToDoList {
  todos: IToDos[];
  toggleToDoItemEvent: (id: number) => void;
}

/**
 * @description 할 일 리스트 컴포넌트
 */
export default function ToDoList({ todos, toggleToDoItemEvent }: IToDoList) {
  return (
    <div className="w-full h-full">
      {todos.map((todo) => {
        const { checked, content, id } = todo;

        const onChange = () => {
          toggleToDoItemEvent(id);
        };

        return (
          <ToDoItem
            content={content}
            id={id}
            isChecked={checked}
            key={`todo-item-${id}-${checked}-${content}`}
            onChange={onChange}
          />
        );
      })}
    </div>
  );
}
