import SettingContent from "@/components/setting/SettingContent";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: SettingContent,
  title: "setting/SettingContent",
} as ComponentMeta<typeof SettingContent>;

const Template: ComponentStory<typeof SettingContent> = (args) => <SettingContent />;

export const Default = Template.bind({});
