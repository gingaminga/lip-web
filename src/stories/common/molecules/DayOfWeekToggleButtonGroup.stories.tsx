import DayOfWeekToggleButtonGroup from "@/components/common/molecules/DayOfWeekToggleButtonGroup";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const initDaysOfWeek = {
  fri: false,
  mon: false,
  sat: false,
  sun: false,
  thr: false,
  tue: false,
  wed: false,
};

export default {
  component: DayOfWeekToggleButtonGroup,
  title: "common/molecules/DayOfWeekToggleButtonGroup",
} as ComponentMeta<typeof DayOfWeekToggleButtonGroup>;

const Template: ComponentStory<typeof DayOfWeekToggleButtonGroup> = (args) => <DayOfWeekToggleButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  daysOfWeek: {
    ...initDaysOfWeek,
    sun: true,
  },
};
