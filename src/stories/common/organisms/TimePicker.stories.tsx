import TimePicker from "@/components/common/organisms/TimePicker";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  args: {
    isUseHours: true,
    isUseMinutes: true,
    isUseSeconds: true,
  },
  component: TimePicker,
  title: "common/organisms/TimePicker",
} as ComponentMeta<typeof TimePicker>;

const Template: ComponentStory<typeof TimePicker> = (args) => <TimePicker {...args} />;

export const HourMinSecTimePicker = Template.bind({});
