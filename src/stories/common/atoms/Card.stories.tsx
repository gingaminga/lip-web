import Card from "@/components/common/atoms/Card";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div className="card-body">Sample test</div>,
};
