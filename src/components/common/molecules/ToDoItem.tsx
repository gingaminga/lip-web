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
    <div className="form-control">
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
    </div>
  );
}
