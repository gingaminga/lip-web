import SubTitle from "@/components/common/molecules/SubTitle";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { SiGmail } from "react-icons/si";

/**
 * @description 개발자 연락 컴포넌트
 */
export default function DeveloperContact() {
  return (
    <section>
      <SubTitle title="개발자 연락처" description="피드백은 언제나 환영입니다. :)" />
      <div className="flex gap-5">
        <Link href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=cjhwaan@gmail.com" target="_blank">
          <SiGmail className="h-10 w-10" />
        </Link>
        <Link href="https://github.com/gingaminga/lip-web" target="_blank">
          <IoLogoGithub className="h-10 w-10" />
        </Link>
      </div>
    </section>
  );
}
