import NavigationBar from "@/components/common/organisms/NavigationBar";
import MockProvider from "@/stories/MockProvider";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Organisms/NavigationBar",
  component: NavigationBar,
  decorators: [(story) => <MockProvider>{story()}</MockProvider>],
  args: {
    isLogin: true,
  },
  argTypes: {
    isLogin: {
      control: "boolean",
    },
  },
} as ComponentMeta<typeof NavigationBar>;

const Template: ComponentStory<typeof NavigationBar> = (args) => <NavigationBar {...args} />;

export const Default = Template.bind({});
