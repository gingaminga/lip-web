/**
 * @description 할 일 추가 컴포넌트
 */
export default function ToDoAdd() {
  return (
    <div className="w-full h-full flex">
      <input
        className="input input-bordered border-2 w-full mr-1 max-sm:input-sm"
        placeholder="오늘 할 일은?"
        type="text"
      />
      <button className="btn btn-ghost" type="button">
        추가
      </button>
    </div>
  );
}
