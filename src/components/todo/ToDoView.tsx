import ConfirmModal from "@/components/common/organisms/ConfirmModal";
import TimePicker from "@/components/common/organisms/TimePicker";
import ArticleTemplate from "@/components/common/templates/ArticleTemplate";
import ToDoAdd from "@/components/todo/ToDoAdd";
import ToDoHeader from "@/components/todo/ToDoHeader";
import ToDoList from "@/components/todo/ToDoList";
import useRemoveToDoMutation from "@/hooks/queries/useRemoveToDoMutation";
import useToDosQuery from "@/hooks/queries/useToDosQuery";
import useModal from "@/hooks/useModal";
import useTimePicker from "@/hooks/useTimePicker";
import { IRouTineToDoData, IToDoData } from "@/types/todo";
import { getYYYYMMDD } from "@/utils/date";
import { QUERY_KEY } from "@/utils/query-key";
import { useQueryClient } from "@tanstack/react-query";

interface IToDoView {
  date: Date;
}

export default function ToDoView({ date }: IToDoView) {
  const queryCache = useQueryClient();

  const {
    closeModal: closeRemoveModal,
    isOpenModal: isOpenRemoveModal,
    modalItem: removeModalItem,
    openModal: openRemoveModal,
  } = useModal<IToDoData | IRouTineToDoData>();
  const {
    closeModal: closeAlarmModal,
    isOpenModal: isOpenAlarmModal,
    modalItem: alarmModalItem,
    openModal: openAlarmModal,
  } = useModal<IToDoData | IRouTineToDoData>();
  const { changeHours, changeMinutes, hours, minutes } = useTimePicker();

  const currentDate = getYYYYMMDD("", date);
  const { data: allToDos } = useToDosQuery(currentDate);
  const { routineTodos = [], todos = [] } = allToDos || {};

  const { mutate: removeToDo } = useRemoveToDoMutation({
    onSuccess: () => {
      closeRemoveModal(); // 팝업 닫기

      queryCache.invalidateQueries(QUERY_KEY.LIP.GET_TODOS(currentDate)); // 재요청
    },
  });

  // 완료 todo count
  const successRoutineToDoCount = routineTodos.filter((routineToDo) => routineToDo.checked).length;
  const successToDoCount = todos.filter((todo) => todo.checked).length;
  const successAllToDoCount = successRoutineToDoCount + successToDoCount;

  // 전체 todo count
  const totalRoutineToDoCount = routineTodos.length;
  const totalToDoCount = todos.length;
  const totalAllToDoCount = totalRoutineToDoCount + totalToDoCount;

  const toggleToDoItemEvent = (item: IToDoData) => {
    console.log("check todo", item);
  };

  const toggleRoutineToDoItemEvent = (item: IRouTineToDoData) => {
    console.log("check routine todo", item);
  };

  /**
   * @description 할 일 삭제하기
   */
  const removeToDoItem = () => {
    if (removeModalItem) {
      const { id } = removeModalItem;
      const params = {
        id,
      };

      removeToDo(params);
    }
  };

  return (
    <>
      <ArticleTemplate>
        <div className="h-28">
          <ToDoHeader date={date} successCount={successAllToDoCount} totalCount={totalAllToDoCount} />
        </div>
        <div className="h-14 max-sm:h-10">
          <ToDoAdd />
        </div>
        <div className="h-[calc(100%-7rem-3.5rem)] max-sm:h-[calc(100%-7rem-2.5rem)] overflow-auto">
          <ToDoList<IToDoData>
            removeToDoItemEvent={openRemoveModal}
            setAlarmToDoEvent={openAlarmModal}
            title="할 일"
            toggleToDoItemEvent={toggleToDoItemEvent}
            todos={todos}
          />
          <ToDoList<IRouTineToDoData>
            emptyDescription="오늘은 쉬는 날!"
            setAlarmToDoEvent={openAlarmModal}
            title="루틴 할 일"
            toggleToDoItemEvent={toggleRoutineToDoItemEvent}
            todos={routineTodos}
            useRemoveButton={false}
          />
        </div>
      </ArticleTemplate>
      <ConfirmModal
        isOpen={isOpenRemoveModal}
        isShowCancleButton
        isShowConfirmButton
        onCloseEvent={closeRemoveModal}
        onConfirmEvent={removeToDoItem}
      >
        <p className="p-2">정말 삭제할까요?</p>
      </ConfirmModal>
      <ConfirmModal
        isOpen={isOpenAlarmModal}
        isShowCancleButton
        isShowConfirmButton
        onCloseEvent={closeAlarmModal}
        onConfirmEvent={removeToDoItem}
      >
        <div className="flex justify-center">
          <TimePicker
            changeHours={changeHours}
            changeMinutes={changeMinutes}
            hours={hours}
            isUseSeconds={false}
            minutes={minutes}
          />
        </div>
      </ConfirmModal>
    </>
  );
}
