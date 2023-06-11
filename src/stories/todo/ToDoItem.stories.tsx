import ToDoItem from "@/components/todo/ToDoItem";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: ToDoItem,
  title: "todo/ToDoItem",
} as ComponentMeta<typeof ToDoItem>;

const Template: ComponentStory<typeof ToDoItem> = (args) => <ToDoItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "할 일 내용",
  id: 0,
  isChecked: false,
};
