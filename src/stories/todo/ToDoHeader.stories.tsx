import ToDoHeader from "@/components/todo/ToDoHeader";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: ToDoHeader,
  title: "todo/ToDoHeader",
} as ComponentMeta<typeof ToDoHeader>;

const Template: ComponentStory<typeof ToDoHeader> = (args) => <ToDoHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  successCount: 10,
  totalCount: 25,
};
