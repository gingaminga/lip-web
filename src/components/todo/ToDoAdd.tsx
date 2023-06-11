/**
 * @description 할 일 추가 컴포넌트
 */
export default function ToDoAdd() {
  return (
    <div className="form-control">
      <div className="input-group">
        <input className="input input-bordered w-full max-sm:input-sm" placeholder="오늘 할 일은?" type="text" />
        <button className="btn max-sm:btn-sm" type="button">
          추가
        </button>
      </div>
    </div>
  );
}
