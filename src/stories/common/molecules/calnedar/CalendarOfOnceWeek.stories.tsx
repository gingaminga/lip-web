import CalendarOfOnceWeek from "@/components/common/molecules/calendar/CalendarOfOnceWeek";
import { getDays, getDaysOfWeek } from "@/utils/date";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const days = getDays();

export default {
  component: CalendarOfOnceWeek,
  title: "common/molecules/calendar/CalendarOfOnceWeek",
} as ComponentMeta<typeof CalendarOfOnceWeek>;

const Template: ComponentStory<typeof CalendarOfOnceWeek> = (args) => <CalendarOfOnceWeek {...args} />;

export const OnceWeekInCurrentMonth = Template.bind({});
OnceWeekInCurrentMonth.args = {
  days: getDaysOfWeek(days, 1),
};

export const TwiceWeekInCurrentMonth = Template.bind({});
TwiceWeekInCurrentMonth.args = {
  days: getDaysOfWeek(days, 2),
};

export const ThirdWeekInCurrentMonth = Template.bind({});
ThirdWeekInCurrentMonth.args = {
  days: getDaysOfWeek(days, 3),
};

export const FourthWeekInCurrentMonth = Template.bind({});
FourthWeekInCurrentMonth.args = {
  days: getDaysOfWeek(days, 4),
};

export const FifthhWeekInCurrentMonth = Template.bind({});
FifthhWeekInCurrentMonth.args = {
  days: getDaysOfWeek(days, 5),
};
