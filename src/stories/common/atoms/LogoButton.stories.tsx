import LogoButton from "@/components/common/atoms/LogoButton";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { OAUTH_LOGIN_CONFIG } from "@/utils/config";

export default {
  title: "Atoms/Button/LogoButton",
  component: LogoButton,
} as ComponentMeta<typeof LogoButton>;

const Template: ComponentStory<typeof LogoButton> = (args) => <LogoButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "Logo Button Text",
};

const [KAKAO_CONFIG, NAVER_CONFIG, GOOGLE_CONFIG] = OAUTH_LOGIN_CONFIG;

export const Kakao = Template.bind({});
Kakao.args = {
  buttonClassName: KAKAO_CONFIG.className,
  children: <KAKAO_CONFIG.LogoComponent className="w-7 h-7" />,
  value: KAKAO_CONFIG.text,
};

export const Naver = Template.bind({});
Naver.args = {
  buttonClassName: NAVER_CONFIG.className,
  children: <NAVER_CONFIG.LogoComponent className="w-7 h-7" />,
  value: NAVER_CONFIG.text,
};

export const Google = Template.bind({});
Google.args = {
  buttonClassName: GOOGLE_CONFIG.className,
  children: <GOOGLE_CONFIG.LogoComponent className="w-7 h-7" />,
  value: GOOGLE_CONFIG.text,
};
