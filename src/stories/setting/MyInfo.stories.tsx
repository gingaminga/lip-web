import MyInfo from "@/components/setting/MyInfo";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: MyInfo,
  title: "setting/MyInfo",
} as ComponentMeta<typeof MyInfo>;

const Template: ComponentStory<typeof MyInfo> = (args) => <MyInfo {...args} />;

export const Default = Template.bind({});
