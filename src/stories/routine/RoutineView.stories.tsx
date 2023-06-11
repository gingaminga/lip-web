import RoutineView from "@/components/routine/RoutineView";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: RoutineView,
  title: "routine/RoutineView",
} as ComponentMeta<typeof RoutineView>;

const Template: ComponentStory<typeof RoutineView> = (args) => <RoutineView />;

export const Default = Template.bind({});
