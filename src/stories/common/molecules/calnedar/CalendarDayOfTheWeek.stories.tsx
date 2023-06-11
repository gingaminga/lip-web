import CalendarDayOfTheWeek from "@/components/common/molecules/calendar/CalendarDayOfTheWeek";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: CalendarDayOfTheWeek,
  title: "common/molecules/calendar/CalendarDayOfTheWeek",
} as ComponentMeta<typeof CalendarDayOfTheWeek>;

const Template: ComponentStory<typeof CalendarDayOfTheWeek> = (args) => <CalendarDayOfTheWeek />;

export const Default = Template.bind({});
