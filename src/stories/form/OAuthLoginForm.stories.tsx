import OAuthLoginForm from "@/components/form/OAuthLoginForm";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Form/OAuthLogin",
  component: OAuthLoginForm,
} as ComponentMeta<typeof OAuthLoginForm>;

const Template: ComponentStory<typeof OAuthLoginForm> = (args) => <OAuthLoginForm onClick={() => {}} />;

export const Default = Template.bind({});
