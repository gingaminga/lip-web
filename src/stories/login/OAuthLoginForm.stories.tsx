import OAuthLoginForm from "@/components/login/OAuthLoginForm";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: OAuthLoginForm,
  title: "login/OAuthLogin",
} as ComponentMeta<typeof OAuthLoginForm>;

const Template: ComponentStory<typeof OAuthLoginForm> = (args) => <OAuthLoginForm {...args} />;

export const Default = Template.bind({});
