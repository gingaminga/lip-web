import LocalNavigationBar from "@/components/common/organisms/LocalNavigationBar";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: LocalNavigationBar,
  title: "common/organisms/LocalNavigationBar",
} as ComponentMeta<typeof LocalNavigationBar>;

const Template: ComponentStory<typeof LocalNavigationBar> = (args) => <LocalNavigationBar />;

export const Default = Template.bind({});
