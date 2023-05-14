import CommonTemplate from "@/components/common/templates/CommonTemplate";
import MockProvider from "@/stories/MockProvider";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Templates/CommonTemplate",
  component: CommonTemplate,
  decorators: [(story) => <MockProvider>{story()}</MockProvider>],
  args: {
    isLogin: true,
  },
  argTypes: {
    isLogin: {
      control: "boolean",
    },
  },
} as ComponentMeta<typeof CommonTemplate>;

const Template: ComponentStory<typeof CommonTemplate> = (args) => <CommonTemplate {...args} />;

export const Default = Template.bind({});
