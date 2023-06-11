import { ReactNode, useCallback } from "react";

interface ICommonButton {
  onClick: () => void;
}

export interface IModal {
  children: ReactNode;
  isOpen: boolean;
  isShowCancleButton?: boolean; // 취소 버튼 활성화 여부
  isShowCloseButton?: boolean; // 닫기 버튼 활성화 여부
  isShowConfirmButton?: boolean; // 확인 버튼 활성화 여부
  onCloseEvent?: () => void; // 모달창 닫기 이벤트
  onConfirmEvent?: () => void; // 확인 버튼 event
}

const CancleButton = ({ onClick }: ICommonButton) => (
  <button className="btn" onClick={onClick} type="button">
    취소
  </button>
);

const ConfirmButton = ({ onClick }: ICommonButton) => (
  <button className="btn" onClick={onClick} type="button">
    확인
  </button>
);

/**
 * @description 모달 컴포넌트
 */
export default function Modal({
  children,
  isOpen,
  isShowCancleButton = false,
  isShowCloseButton = true,
  isShowConfirmButton = false,
  onCloseEvent,
  onConfirmEvent,
}: IModal) {
  const modalClassName = `modal ${isOpen ? "modal-open" : ""}`;

  const ButtonView = useCallback(() => {
    if (!isShowCancleButton && !isShowConfirmButton) {
      return null;
    }

    return (
      <div className="modal-action">
        {isShowConfirmButton && onConfirmEvent && <ConfirmButton onClick={onConfirmEvent} />}
        {isShowCancleButton && onCloseEvent && <CancleButton onClick={onCloseEvent} />}
      </div>
    );
  }, [isShowCancleButton, isShowConfirmButton, onCloseEvent, onConfirmEvent]);

  return (
    <div className={modalClassName}>
      <div className="modal-box relative">
        {isShowCloseButton && (
          <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={onCloseEvent} type="button">
            ✕
          </button>
        )}
        {children}
        {ButtonView()}
      </div>
    </div>
  );
}
