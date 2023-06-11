import CommonTemplate from "@/components/common/templates/CommonTemplate";
import MockProvider from "@/stories/MockProvider";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  args: {
    children: <div>Content</div>,
    isLogin: true,
  },
  component: CommonTemplate,
  decorators: [(story) => <MockProvider>{story()}</MockProvider>],
  title: "common/templates/CommonTemplate",
} as ComponentMeta<typeof CommonTemplate>;

const Template: ComponentStory<typeof CommonTemplate> = (args) => <CommonTemplate {...args} />;

export const Default = Template.bind({});
