import Card from "@/components/common/atoms/Card";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  args: {
    children: <div className="card-body justify-center items-center">Sample card</div>,
  },
  component: Card,
  title: "common/atoms/Card",
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Card208240 = Template.bind({});
Card208240.args = {
  styles: {
    height: "h-60",
    width: "w-52",
  },
};

export const Card240208 = Template.bind({});
Card240208.args = {
  styles: {
    height: "h-52",
    width: "w-60",
  },
};
