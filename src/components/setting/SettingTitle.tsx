interface ITitle {
  nickname: string;
}

/**
 * @description 설정 타이틀 컴포넌트
 */
export default function Title({ nickname }: ITitle) {
  return (
    <h1 className="text-3xl font-bold text-center max-sm:text-2xl">
      안녕하세요 <span className="underline underline-offset-4">{nickname}</span> 님🎉
    </h1>
  );
}
