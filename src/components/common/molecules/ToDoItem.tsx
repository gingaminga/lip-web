import { BsTrash } from "react-icons/bs";

interface IToDoItem {
  content: string; // 내용
  id: number;
  isChecked: boolean; // 체크 유무
  onChange: () => void;
}

/**
 * @description 할 일 아이템 컴포넌트
 */
export default function ToDoItem({ content, id, isChecked, onChange }: IToDoItem) {
  const checkboxClassName = `checkbox ${isChecked ? " checkbox-success checked:bg-none" : ""}`;
  const contentClassName = `label-text ml-6${isChecked ? " line-through text-neutral-400" : ""}`;

  return (
    <div className="flex items-center justify-between">
      <label className="label cursor-pointer justify-start" htmlFor={`checkbox-todo-${id}`}>
        <input
          checked={isChecked}
          className={checkboxClassName}
          id={`checkbox-todo-${id}`}
          onChange={onChange}
          type="checkbox"
        />
        <span className={contentClassName}>{content}</span>
      </label>
      <button className="btn btn-ghost btn-circle btn-sm mr-3" type="button">
        <BsTrash className="h-4 w-4 text-neutral-400" />
      </button>
    </div>
  );
}