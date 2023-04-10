import SocialLoginForm from "@/components/form/SocialLoginForm";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Form/SocialLogin",
  component: SocialLoginForm,
} as ComponentMeta<typeof SocialLoginForm>;

const Template: ComponentStory<typeof SocialLoginForm> = (args) => <SocialLoginForm />;

export const Default = Template.bind({});
