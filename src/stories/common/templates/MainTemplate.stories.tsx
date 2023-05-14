import MainTemplate from "@/components/common/templates/MainTemplate";
import MockProvider from "@/stories/MockProvider";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Templates/MainTemplate",
  component: MainTemplate,
  decorators: [(story) => <MockProvider>{story()}</MockProvider>],
  args: {
    isLogin: true,
  },
  argTypes: {
    isLogin: {
      control: "boolean",
    },
  },
} as ComponentMeta<typeof MainTemplate>;

const Template: ComponentStory<typeof MainTemplate> = (args) => <MainTemplate {...args} />;

export const Default = Template.bind({});
