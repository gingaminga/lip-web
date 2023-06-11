import DetailRoutineView from "@/components/routine/DetailRoutineView";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: DetailRoutineView,
  title: "routine/DetailRoutineView",
} as ComponentMeta<typeof DetailRoutineView>;

const Template: ComponentStory<typeof DetailRoutineView> = (args) => <DetailRoutineView />;

export const Default = Template.bind({});
