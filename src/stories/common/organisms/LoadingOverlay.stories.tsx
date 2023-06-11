import LoadingOverlay from "@/components/common/organisms/LoadingOverlay";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: LoadingOverlay,
  title: "common/organisms/LoadingOverlay",
} as ComponentMeta<typeof LoadingOverlay>;

const Template: ComponentStory<typeof LoadingOverlay> = (args) => <LoadingOverlay />;

export const Default = Template.bind({});
