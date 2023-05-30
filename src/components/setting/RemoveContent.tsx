import SubTitle from "@/components/common/molecules/SubTitle";
import ConfirmModal from "@/components/common/organisms/ConfirmModal";
import useModal from "@/hooks/useModal";
import { REMOVE_CONTENT_CONFIG } from "@/utils/config";

/**
 * @description 컨텐츠 삭제 컴포넌트
 */
export default function RemoveContent() {
  const { closeModal, isOpenModal, modalItem, openModal } = useModal<string>();

  const removeAllToDo = () => {
    console.log("remove all todo");
  };

  const removeAllRoutine = () => {
    console.log("remove all routine");
  };

  const handleRemoveAllItem = () => {
    if (modalItem === "remove-all-todo") {
      removeAllToDo();
    } else if (modalItem === "remove-all-routine") {
      removeAllRoutine();
    }
  };

  return (
    <>
      <section>
        <SubTitle title="비우기" />
        <div className="flex gap-2 flex-wrap">
          {REMOVE_CONTENT_CONFIG.map((config) => {
            const { className, text, type } = config;

            const handleClick = () => {
              openModal(type);
            };

            return (
              <button className={className} key={`remove-content-${text}-${type}`} onClick={handleClick} type="button">
                {text}
              </button>
            );
          })}
        </div>
      </section>
      <ConfirmModal
        isOpen={isOpenModal}
        isShowCancleButton
        isShowConfirmButton
        onCloseEvent={closeModal}
        onConfirmEvent={handleRemoveAllItem}
      >
        <p className="p-3">
          비워버리면 복구할 수 없어요.
          <br /> 정말 비울까요?
        </p>
      </ConfirmModal>
    </>
  );
}
