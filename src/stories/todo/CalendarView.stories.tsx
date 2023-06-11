import CalendarView from "@/components/todo/CalendarView";
import MockProvider from "@/stories/MockProvider";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: CalendarView,
  decorators: [(story) => <MockProvider>{story()}</MockProvider>],
  title: "todo/CalendarView",
} as ComponentMeta<typeof CalendarView>;

const Template: ComponentStory<typeof CalendarView> = (args) => <CalendarView />;

export const Default = Template.bind({});
