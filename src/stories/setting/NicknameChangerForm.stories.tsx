import NicknameChangerForm from "@/components/setting/NicknameChangerForm";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: NicknameChangerForm,
  title: "setting/NicknameChangerForm",
} as ComponentMeta<typeof NicknameChangerForm>;

const Template: ComponentStory<typeof NicknameChangerForm> = (args) => <NicknameChangerForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "작성에 필요한 가이드를 해주세요.",
};
