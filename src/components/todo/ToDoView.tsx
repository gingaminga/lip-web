import ConfirmModal from "@/components/common/organisms/ConfirmModal";
import TimePicker from "@/components/common/organisms/TimePicker";
import ArticleTemplate from "@/components/common/templates/ArticleTemplate";
import ToDoAdd from "@/components/todo/ToDoAdd";
import ToDoHeader from "@/components/todo/ToDoHeader";
import ToDoList from "@/components/todo/ToDoList";
import ToDoModifyInputForm from "@/components/todo/ToDoModifyInputForm";
import useAddToDoMutation from "@/hooks/queries/useAddToDoMutation";
import useCheckRoutineToDoMutation from "@/hooks/queries/useCheckRoutineToDoMutation";
import useCheckToDoMutation from "@/hooks/queries/useCheckToDoMutation";
import useModifyToDoMutation from "@/hooks/queries/useModifyToDoMutation";
import useRemoveToDoMutation from "@/hooks/queries/useRemoveToDoMutation";
import useSetAlarmInToDoMutation from "@/hooks/queries/useSetAlarmInToDoMutation";
import useToDosQuery from "@/hooks/queries/useToDosQuery";
import useModal from "@/hooks/useModal";
import useTimePicker from "@/hooks/useTimePicker";
import { IRouTineToDoData, IToDoData } from "@/types/todo";
import { getYYYYMMDD } from "@/utils/date";
import { QUERY_KEY } from "@/utils/query-key";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

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
  const { changeHours, changeMinutes, hours, minutes } = useTimePicker({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [selectedToDoItem, setSelectedToDoItem] = useState<IToDoData>(); // 할 일 수정 시 정보 저장
  /**
   * @description 할 일 수정하는 정보 저장하기
   * @param items 할 일 정보
   */
  const saveSelectedModifyToDoItem = (items?: IToDoData) => {
    setSelectedToDoItem(items);
  };

  const currentDate = getYYYYMMDD("", date);
  const { data: allToDos } = useToDosQuery(currentDate);
  const { routineTodos = [], todos = [] } = allToDos || {};

  const { mutate: removeToDo } = useRemoveToDoMutation({
    onSuccess: () => {
      closeRemoveModal(); // 팝업 닫기

      queryCache.invalidateQueries(QUERY_KEY.LIP.GET_TODOS(currentDate)); // 재요청
    },
  });
  const {
    isLoading: isLoadingAddToDo,
    mutate: addToDo,
    isSuccess: isSuccessAddToDo,
  } = useAddToDoMutation({
    onSuccess: () => {
      queryCache.invalidateQueries(QUERY_KEY.LIP.GET_TODOS(currentDate)); // 재요청
    },
  });
  const { mutate: checkToDo } = useCheckToDoMutation({
    onSuccess: () => {
      queryCache.invalidateQueries(QUERY_KEY.LIP.GET_TODOS(currentDate)); // 재요청
    },
  });
  const { mutate: checkRoutineToDo } = useCheckRoutineToDoMutation({
    onSuccess: () => {
      queryCache.invalidateQueries(QUERY_KEY.LIP.GET_TODOS(currentDate)); // 재요청
    },
  });
  const { mutate: setAlarmInToDo } = useSetAlarmInToDoMutation({
    onSuccess: () => {
      closeAlarmModal(); // 팝업 닫기

      queryCache.invalidateQueries(QUERY_KEY.LIP.GET_TODOS(currentDate)); // 재요청
    },
  });
  const { isLoading: isLoadingModifyToDo, mutate: modifyToDo } = useModifyToDoMutation({
    onSuccess: () => {
      saveSelectedModifyToDoItem(); // 수정 데이터 초기화

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

  /**
   * @description 할 일 완료 유무 체크하기
   * @param item 할 일 정보
   */
  const checkToDoItem = (item: IToDoData) => {
    const { checked, id } = item;
    const params = {
      checked: checked ? 0 : 1, // 변경하는 작업이기 때문에 기존 정보의 반대로 전달
      id,
    };

    checkToDo(params);
  };

  /**
   * @description 루틴 할 일 완료 유무 체크하기
   * @param item 루틴 할 일 정보
   */
  const checkRoutineToDoItem = (item: IRouTineToDoData) => {
    const { checked, routineID } = item;
    const params = {
      checked: checked ? 0 : 1, // 변경하는 작업이기 때문에 기존 정보의 반대로 전달
      date: currentDate,
      id: routineID,
    };

    checkRoutineToDo(params);
  };

  /**
   * @description 할 일 추가하기
   * @param content 내용
   */
  const addToDoItem = (content: string) => {
    const params = {
      content,
      date: currentDate,
    };

    addToDo(params);
  };

  /**
   * @description 할 일 수정하기
   * @param id 할 일 ID
   * @param content 내용
   */
  const modifyToDoItem = (id: number, content: string) => {
    const params = {
      content,
      id,
    };

    modifyToDo(params);
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

  /**
   * @description 할 일의 알람 설정하기
   */
  const setAlarmInToDoItem = () => {
    if (setAlarmInToDo && alarmModalItem) {
      const params = {
        alarmHour: hours,
        alarmMinute: minutes,
        id: alarmModalItem.id,
      };

      setAlarmInToDo(params);
    }
  };

  /**
   * @description 할 일의 기본 알람 정보 설정하기
   * @param items 할 일 정보
   */
  const setDefaultAlarmInToDo = (items?: IToDoData) => {
    if (items) {
      const { alarm } = items;
      const { hour = 0, minute = 0 } = alarm || {};

      if (hour !== hours) {
        changeHours(hour);
      }

      if (minute !== minutes) {
        changeMinutes(minute);
      }

      openAlarmModal(items);
    }
  };

  return (
    <>
      <ArticleTemplate>
        <div className="h-28">
          <ToDoHeader date={date} successCount={successAllToDoCount} totalCount={totalAllToDoCount} />
        </div>
        <div className="h-14 max-sm:h-10">
          {selectedToDoItem ? (
            <ToDoModifyInputForm
              cancleButtonEvent={saveSelectedModifyToDoItem}
              isLoadingModifyToDo={isLoadingModifyToDo}
              modifyToDoItemEvent={modifyToDoItem}
              todoItem={selectedToDoItem}
            />
          ) : (
            <ToDoAdd
              addToDoItemEvent={addToDoItem}
              isLoadingAddToDo={isLoadingAddToDo}
              isSuccessAddToDo={isSuccessAddToDo}
            />
          )}
        </div>
        <div className="h-[calc(100%-7rem-3.5rem)] max-sm:h-[calc(100%-7rem-2.5rem)] overflow-auto">
          <ToDoList<IToDoData>
            modifyToDoItemEvent={saveSelectedModifyToDoItem}
            removeToDoItemEvent={openRemoveModal}
            setAlarmToDoEvent={setDefaultAlarmInToDo}
            title="할 일"
            toggleToDoItemEvent={checkToDoItem}
            todos={todos}
          />
          <ToDoList<IRouTineToDoData>
            emptyDescription="오늘은 쉬는 날!"
            title="루틴 할 일"
            toggleToDoItemEvent={checkRoutineToDoItem}
            todos={routineTodos}
            useAlarmButton={false}
            useModifyButton={false}
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
        onConfirmEvent={setAlarmInToDoItem}
      >
        {isOpenAlarmModal && (
          <div className="flex justify-center">
            <TimePicker
              changeHours={changeHours}
              changeMinutes={changeMinutes}
              hours={hours}
              isUseSeconds={false}
              minutes={minutes}
            />
          </div>
        )}
      </ConfirmModal>
    </>
  );
}
