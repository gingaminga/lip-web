import SubTitle from "@/components/common/molecules/SubTitle";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: SubTitle,
  title: "common/molecules/SubTitle",
} as ComponentMeta<typeof SubTitle>;

const Template: ComponentStory<typeof SubTitle> = (args) => <SubTitle {...args} />;

export const Default = Template.bind({});

Default.args = {
  description: "부가적인 설명입니다.",
  title: "제목",
};
