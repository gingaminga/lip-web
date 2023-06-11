import SettingView from "@/components/setting/SettingView";
import MockProvider from "@/stories/MockProvider";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: SettingView,
  decorators: [(story) => <MockProvider>{story()}</MockProvider>],
  title: "setting/SettingView",
} as ComponentMeta<typeof SettingView>;

const Template: ComponentStory<typeof SettingView> = (args) => <SettingView />;

export const Default = Template.bind({});
