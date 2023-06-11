import ToDoView from "@/components/todo/ToDoView";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: ToDoView,
  title: "todo/ToDoView",
} as ComponentMeta<typeof ToDoView>;

const Template: ComponentStory<typeof ToDoView> = (args) => <ToDoView {...args} />;

export const Default = Template.bind({});
