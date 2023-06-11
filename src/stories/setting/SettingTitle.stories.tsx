import SettingTitle from "@/components/setting/SettingTitle";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: SettingTitle,
  title: "setting/SettingTitle",
} as ComponentMeta<typeof SettingTitle>;

const Template: ComponentStory<typeof SettingTitle> = (args) => <SettingTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  nickname: "닉네임",
};
