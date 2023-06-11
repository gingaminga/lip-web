import NicknameChanger from "@/components/setting/NicknameChanger";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: NicknameChanger,
  title: "setting/NicknameChanger",
} as ComponentMeta<typeof NicknameChanger>;

const Template: ComponentStory<typeof NicknameChanger> = (args) => <NicknameChanger {...args} />;

export const Default = Template.bind({});
