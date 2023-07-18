import ToDoAdd from "@/components/todo/ToDoAdd";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: ToDoAdd,
  title: "todo/ToDoAdd",
} as ComponentMeta<typeof ToDoAdd>;

const Template: ComponentStory<typeof ToDoAdd> = (args) => <ToDoAdd {...args} />;

export const Default = Template.bind({});
