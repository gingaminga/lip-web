import ArticleTemplate from "@/components/common/templates/ArticleTemplate";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  args: {
    children: <div>Content</div>,
  },
  component: ArticleTemplate,
  title: "common/templates/ArticleTemplate",
} as ComponentMeta<typeof ArticleTemplate>;

const Template: ComponentStory<typeof ArticleTemplate> = (args) => <ArticleTemplate {...args} />;

export const Default = Template.bind({});
