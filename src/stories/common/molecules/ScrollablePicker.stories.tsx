import ScrollablePicker from "@/components/common/molecules/ScrollablePicker";
import { HOURS, MINUTES, SECONDS } from "@/utils/date";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: ScrollablePicker,
  title: "common/molecules/ScrollablePicker",
} as ComponentMeta<typeof ScrollablePicker>;

const Template: ComponentStory<typeof ScrollablePicker> = (args) => <ScrollablePicker {...args} />;

export const HoursPicker = Template.bind({});
HoursPicker.args = {
  data: HOURS,
};

export const MinutesPicker = Template.bind({});
MinutesPicker.args = {
  data: MINUTES,
};

export const SecondsPicker = Template.bind({});
SecondsPicker.args = {
  data: SECONDS,
};
