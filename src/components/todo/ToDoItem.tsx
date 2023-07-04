import _ from "lodash";
import { BiTrashAlt } from "react-icons/bi";
import { CiAlarmOn } from "react-icons/ci";

interface IToDoItem {
  content: string; // 내용
  id: number;
  isChecked: boolean; // 체크 유무
  onChange: () => void;
  removeItem?: () => void; // 투두 삭제하기
  setAlarm?: () => void; // 알람 설정하기
  useAlarmButton?: boolean;
  useRemoveButton?: boolean;
}

/**
 * @description 할 일 아이템 컴포넌트
 */
export default function ToDoItem({
  content,
  id,
  isChecked,
  onChange,
  removeItem,
  setAlarm,
  useAlarmButton = false,
  useRemoveButton = false,
}: IToDoItem) {
  const checkboxClassName = `checkbox ${isChecked ? " checkbox-success checked:bg-none" : ""}`;
  const contentClassName = `label-text ml-6${isChecked ? " line-through text-neutral-400" : ""}`;

  return (
    <div className="flex items-center justify-between">
      <label className="label cursor-pointer justify-start" htmlFor={`checkbox-todo-${id}`}>
        <input
          checked={isChecked}
          className={checkboxClassName}
          id={`checkbox-todo-${id}`}
          onChange={_.debounce(onChange, 500)}
          type="checkbox"
        />
        <span className={contentClassName}>{content}</span>
      </label>
      <div className="flex items-center h-full  justify-end">
        {useAlarmButton && (
          <button className="btn btn-ghost btn-circle btn-sm mr-2" onClick={setAlarm} type="button">
            <CiAlarmOn className="h-4 w-4 text-neutral-400" />
          </button>
        )}
        {useRemoveButton && (
          <button className="btn btn-ghost btn-circle btn-sm mr-2" onClick={removeItem} type="button">
            <BiTrashAlt className="h-4 w-4 text-neutral-400" />
          </button>
        )}
      </div>
    </div>
  );
}
