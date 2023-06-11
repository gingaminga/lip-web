import DeveloperContact from "@/components/setting/DeveloperContact";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: DeveloperContact,
  title: "setting/DeveloperContact",
} as ComponentMeta<typeof DeveloperContact>;

const Template: ComponentStory<typeof DeveloperContact> = (args) => <DeveloperContact />;

export const Default = Template.bind({});
