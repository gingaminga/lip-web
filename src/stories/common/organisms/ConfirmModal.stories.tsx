import ConfirmModal from "@/components/common/organisms/ConfirmModal";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: ConfirmModal,
  title: "common/organisms/ConfirmModal",
} as ComponentMeta<typeof ConfirmModal>;

const Template: ComponentStory<typeof ConfirmModal> = (args) => <ConfirmModal {...args} />;

export const CurrentMonth = Template.bind({});
