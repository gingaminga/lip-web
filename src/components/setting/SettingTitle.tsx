interface ITitle {
  email?: string;
  nickname: string;
}

/**
 * @description 설정 타이틀 컴포넌트
 */
export default function Title({ email, nickname }: ITitle) {
  return (
    <hgroup className="text-center ">
      {email && <span className="badge badge-secondary text-xs">{email}</span>}
      <h1 className="text-3xl font-bold max-lg:text-2xl">
        안녕하세요! <span className="underline underline-offset-4">{nickname}</span>님🎉
      </h1>
    </hgroup>
  );
}
