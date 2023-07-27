import SubTitle from "@/components/common/molecules/SubTitle";
import NicknameChangerForm from "@/components/setting/NicknameChangerForm";
import useChangeNicknameMutation from "@/hooks/queries/useChangeNicknameMutation";
import useDuplicateNicknameQuery from "@/hooks/queries/useDuplicateNicknameQuery";
import useUser from "@/hooks/useUser";
import useValidation from "@/hooks/useValidation";
import { ROUTER_PATH } from "@/utils/config";
import Cookie, { REFRESH_TOKEN_COOKIE_OPTION } from "@/utils/cookie";
import { validateNickname } from "@/utils/validator";
import Router from "next/router";
import { useEffect, useState } from "react";

interface INicknameChanger {
  currentNickname: string;
  onCancleEvent: () => void;
}

/**
 * @description 닉네임 변경 컴포넌트
 */
export default function NicknameChanger({ currentNickname, onCancleEvent }: INicknameChanger) {
  const [confirmNickname, setConfirmNickname] = useState("");
  const { handleValidation, validations } = useValidation({
    nickname: {
      message: "",
      status: false,
    },
  });
  const { deviceToken } = useUser();
  const { data: isDuplicateNickname = false } = useDuplicateNicknameQuery(confirmNickname, {
    enabled: confirmNickname.length > 0,
  });
  const { mutate: fetchChangeNickname } = useChangeNicknameMutation({
    onSuccess: async (isSuccess) => {
      if (isSuccess) {
        await Router.push(ROUTER_PATH.LOGIN);
        Cookie.removeCookie("refresh_token", REFRESH_TOKEN_COOKIE_OPTION);

        Router.reload();
      }
    },
  });

  /**
   * @description 닉네임 중복 검사
   * @param nickname 닉네임
   */
  const duplicateNickname = (nickname: string) => {
    if (currentNickname === nickname) {
      handleValidation("nickname", false, `같은 닉네임은 안 바꿔도 돼요. :)`);

      return;
    }

    const { message, status } = validateNickname(nickname);

    handleValidation("nickname", status, message);

    if (status) {
      setConfirmNickname(nickname);
    }
  };

  /**
   * @description 닉네임 변경
   * @param nickname 닉네임
   */
  const changeNickname = (nickname: string) => {
    if (!validations.nickname.status) {
      return;
    }

    const params = {
      deviceToken,
      nickname,
    };

    fetchChangeNickname(params);
  };

  /**
   * @description 닉네임 중복 시 validation 처리
   */
  useEffect(() => {
    if (isDuplicateNickname) {
      handleValidation("nickname", false, "누군가 사용 중이네요.. :(");
    }
  }, [handleValidation, isDuplicateNickname]);

  return (
    <section className="mb-36">
      <SubTitle title="닉네임 변경" description="닉네임을 변경하면 재로그인 해야해요." />
      <NicknameChangerForm
        onCancleEvent={onCancleEvent}
        onConfirmEvent={changeNickname}
        onFocusOutEvent={duplicateNickname}
        placeholder="변경할 닉네임을 입력해주세요."
        validateMessage={validations.nickname.message}
        validateStatus={validations.nickname.status}
      />
    </section>
  );
}
