import RemoveContent from "@/components/setting/RemoveContent";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: RemoveContent,
  title: "setting/RemoveContent",
} as ComponentMeta<typeof RemoveContent>;

const Template: ComponentStory<typeof RemoveContent> = (args) => <RemoveContent />;

export const Default = Template.bind({});
