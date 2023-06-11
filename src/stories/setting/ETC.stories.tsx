import ETC from "@/components/setting/ETC";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: ETC,
  title: "setting/ETC",
} as ComponentMeta<typeof ETC>;

const Template: ComponentStory<typeof ETC> = (args) => <ETC />;

export const Default = Template.bind({});
