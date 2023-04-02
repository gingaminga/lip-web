import ThemeToggle from "@/components/ThemeToggle";
import MockProvider from "@/stories/MockProvider";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Theme/Toggle",
  component: ThemeToggle,
  decorators: [(story) => <MockProvider>{story()}</MockProvider>],
} as ComponentMeta<typeof ThemeToggle>;

const Template: ComponentStory<typeof ThemeToggle> = (args) => <ThemeToggle />;

export const Default = Template.bind({});
