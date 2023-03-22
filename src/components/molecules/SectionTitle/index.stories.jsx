// SectionTitle.stories.js|jsx

import React from "react";

import SectionTitle from ".";

export default {
  title: "atoms/SectionTitle",
  component: SectionTitle,
  args: {
    title: "our title",
    subtitle: "our subtitle",
    color: "darkBrown",
  },
  argTypes: {
    color: {
      control: "inline-radio",
      options: ["white", "black"],
    },
    isLeft: ["true"],
  },
};

const Template = (args) => <SectionTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
 
};



