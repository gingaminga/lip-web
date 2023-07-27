import ConfirmModal from "@/components/common/organisms/ConfirmModal";
import useWithdrawalMutation from "@/hooks/queries/useWithdrawalMutation";
import useModal from "@/hooks/useModal";
import { ROUTER_PATH } from "@/utils/config";
import Router from "next/router";

/**
 * @description 그 외 컴포넌트
 */
export default function ETC() {
  const { mutate } = useWithdrawalMutation({
    onSuccess: async () => {
      await Router.push(ROUTER_PATH.LOGIN);

      Router.reload();
    },
  });
  const { closeModal, isOpenModal, openModal } = useModal();

  const openWithdrawalModal = () => {
    openModal();
  };

  const withdrawalOfMembership = () => {
    mutate();
  };

  return (
    <>
      <section className="flex flex-row-reverse gap-3">
        <button className="btn btn-ghost btn-xs text-neutral-400" onClick={openWithdrawalModal} type="button">
          회원탈퇴
        </button>
      </section>
      <ConfirmModal
        isOpen={isOpenModal}
        isShowCancleButton
        isShowConfirmButton
        onCloseEvent={closeModal}
        onConfirmEvent={withdrawalOfMembership}
      >
        <p className="p-4">
          작성했던 모든 내용은 일괄 삭제되며 복구할 수 없어요.
          <br />
          정말 떠날건가요?😭
        </p>
      </ConfirmModal>
    </>
  );
}
