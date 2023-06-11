import ColorRadioButtonGroup from "@/components/common/molecules/ColorRadioButtonGroup";
import { ROUTINE_THEME_COLOR } from "@/utils/color";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  argTypes: {
    currentColor: {
      control: {
        type: "radio",
      },
      options: ROUTINE_THEME_COLOR.map((config) => config.backgroundColor),
    },
  },
  component: ColorRadioButtonGroup,
  title: "common/molecules/ColorRadioButtonGroup",
} as ComponentMeta<typeof ColorRadioButtonGroup>;

const Template: ComponentStory<typeof ColorRadioButtonGroup> = (args) => <ColorRadioButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentColor: ROUTINE_THEME_COLOR[0].backgroundColor,
};
