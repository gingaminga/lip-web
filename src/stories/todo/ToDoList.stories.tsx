import ToDoList from "@/components/todo/ToDoList";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const TEMP_TODOS = [...Array(30)].map((value, index) => ({
  checked: Math.floor(Math.random() * 1000) % 2 === 0,
  content: `${Math.random() * 1000}`,
  id: index + 1,
}));

export default {
  component: ToDoList,
  title: "todo/ToDoList",
} as ComponentMeta<typeof ToDoList>;

const Template: ComponentStory<typeof ToDoList> = (args) => <ToDoList {...args} />;

export const Default = Template.bind({});
Default.args = {
  todos: TEMP_TODOS,
};
