import RoutineCard from "@/components/routine/RoutineCard";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: RoutineCard,
  title: "routine/RoutineCard",
} as ComponentMeta<typeof RoutineCard>;

const Template: ComponentStory<typeof RoutineCard> = (args) => <RoutineCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  path: "/",
  title: "Test Title",
};
