import CalendarMoveDate from "@/components/common/molecules/calendar/CalendarMoveDate";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: CalendarMoveDate,
  title: "common/molecules/calendar/CalendarMoveDate",
} as ComponentMeta<typeof CalendarMoveDate>;

const Template: ComponentStory<typeof CalendarMoveDate> = (args) => <CalendarMoveDate {...args} />;

export const Default = Template.bind({});
