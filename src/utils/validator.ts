/**
 * @description 닉네임 형식 확인
 * @param nickname 닉네임
 */
export const validateNickname = (nickname: string) => {
  const result = {
    status: false,
    message: "",
  };

  const defaultRegexr = /[^가-힣0-9a-zA-z]/;
  const spaceRegexr = /[\s]/;

  if (!nickname) {
    return result;
  }

  if (defaultRegexr.test(nickname) || spaceRegexr.test(nickname)) {
    result.message = "허용되지 않은 문자가 있어요. :(";

    return result;
  }

  if (nickname.length < 3 || nickname.length > 20) {
    result.message = "닉네임 길이를 확인해주세요. :(";

    return result;
  }

  result.status = true;
  return result;
};
