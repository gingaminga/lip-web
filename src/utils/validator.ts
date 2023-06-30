/**
 * @description 닉네임 형식 확인
 * @param nickname 닉네임
 */
export const validateNickname = (nickname: string) => {
  const result = {
    status: false,
    message: "",
  };

  const defaultRegexr = /^[a-zA-Z0-9가-힣]*$/;

  if (!nickname) {
    return result;
  }

  if (!defaultRegexr.test(nickname)) {
    result.message = "허용되지 않은 문자가 있어요. :(";

    return result;
  }

  if (nickname.length < 2 || nickname.length > 20) {
    result.message = "닉네임은 최소 2자리부터 20자리까지 돼요. :(";

    return result;
  }

  result.status = true;
  result.message = "어울리는 닉네임이예요. :)";
  return result;
};
