import ThemeToggle from "@/components/common/organisms/ThemeToggle";
import MockProvider from "@/stories/MockProvider";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: ThemeToggle,
  decorators: [(story) => <MockProvider>{story()}</MockProvider>],
  title: "common/organisms/ThemeToggle",
} as ComponentMeta<typeof ThemeToggle>;

const Template: ComponentStory<typeof ThemeToggle> = (args) => <ThemeToggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  styles: {
    height: "h-10",
    width: "w-10",
  },
};
