import GlobalNavigationBar from "@/components/common/organisms/GlobalNavigationBar";
import MockProvider from "@/stories/MockProvider";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Organisms/GlobalNavigationBar",
  component: GlobalNavigationBar,
  decorators: [(story) => <MockProvider>{story()}</MockProvider>],
  args: {
    isLogin: true,
  },
  argTypes: {
    isLogin: {
      control: "boolean",
    },
  },
} as ComponentMeta<typeof GlobalNavigationBar>;

const Template: ComponentStory<typeof GlobalNavigationBar> = (args) => <GlobalNavigationBar {...args} />;

export const Default = Template.bind({});
