import GlobalNavigationBar from "@/components/common/organisms/GlobalNavigationBar";
import MockProvider from "@/stories/MockProvider";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  args: {
    isLogin: true,
    projectName: "Project Name",
  },
  component: GlobalNavigationBar,
  decorators: [(story) => <MockProvider>{story()}</MockProvider>],
  title: "common/organisms/GlobalNavigationBar",
} as ComponentMeta<typeof GlobalNavigationBar>;

const Template: ComponentStory<typeof GlobalNavigationBar> = (args) => <GlobalNavigationBar {...args} />;

export const Default = Template.bind({});
