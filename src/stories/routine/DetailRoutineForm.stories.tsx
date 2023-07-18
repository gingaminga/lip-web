import DetailRoutineForm from "@/components/routine/DetailRoutineForm";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: DetailRoutineForm,
  title: "routine/DetailRoutineForm",
} as ComponentMeta<typeof DetailRoutineForm>;

const Template: ComponentStory<typeof DetailRoutineForm> = (args) => <DetailRoutineForm {...args} />;

export const Default = Template.bind({});
