import CalendarOfMonth from "@/components/common/molecules/calendar/CalendarOfMonth";
import { getDays } from "@/utils/date";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  args: {
    days: getDays(),
  },
  component: CalendarOfMonth,
  title: "common/molecules/calendar/CalendarOfMonth",
} as ComponentMeta<typeof CalendarOfMonth>;

const Template: ComponentStory<typeof CalendarOfMonth> = (args) => <CalendarOfMonth {...args} />;

export const CurrentMonth = Template.bind({});
