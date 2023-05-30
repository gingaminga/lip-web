import { useState } from "react";

interface IModalState<T> {
  isOpenModal: boolean;
  item?: T; // 사용자가 원하는 item
}

const INIT_STATE = {
  isOpenModal: false,
  item: undefined,
};

/**
 * @description 모달 관련 hook
 */
export default function useModal<T = undefined>() {
  const [modalOption, setModalOption] = useState<IModalState<T>>(INIT_STATE);

  /**
   * @description 모달 열기
   */
  const openModal = (item?: T) => {
    setModalOption((currentOption) => ({
      ...currentOption,
      isOpenModal: true,
      item,
    }));
  };

  /**
   * @description 모달 닫기
   */
  const closeModal = () => {
    setModalOption((currentOption) => ({
      ...currentOption,
      isOpenModal: false,
      item: undefined,
    }));
  };

  return {
    closeModal,
    isOpenModal: modalOption.isOpenModal,
    modalItem: modalOption.item,
    openModal,
  };
}
