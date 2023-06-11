import MainTemplate from "@/components/common/templates/MainTemplate";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  args: {
    children: <div>Content</div>,
    isLogin: true,
  },
  component: MainTemplate,
  title: "common/templates/MainTemplate",
} as ComponentMeta<typeof MainTemplate>;

const Template: ComponentStory<typeof MainTemplate> = (args) => <MainTemplate {...args} />;

export const Default = Template.bind({});
