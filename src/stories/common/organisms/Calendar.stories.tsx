import Calendar from "@/components/common/organisms/Calendar";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: Calendar,
  title: "common/organisms/Calendar",
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => <Calendar {...args} />;

export const CurrentMonth = Template.bind({});
