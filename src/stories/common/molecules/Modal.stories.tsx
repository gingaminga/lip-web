import Modal from "@/components/common/molecules/Modal";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  args: {
    isOpen: true,
    isShowCancleButton: true,
    isShowCloseButton: true,
    isShowConfirmButton: true,
  },
  component: Modal,
  title: "common/molecules/Modal",
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
