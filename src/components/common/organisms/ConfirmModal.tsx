import Modal, { IModal } from "@/components/common/atoms/Modal";
import { createPortal } from "react-dom";

type TConfirmModal = IModal;

/**
 * @description 확인 모달 컴포넌트
 */
export default function ConfirmModal({ ...rest }: TConfirmModal) {
  const modalElement = document.getElementById("modal");
  if (!modalElement) {
    return <div />;
  }

  return <>{createPortal(<Modal {...rest} />, modalElement)}</>;
}
