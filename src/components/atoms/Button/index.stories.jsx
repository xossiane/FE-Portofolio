// Button.stories.js|jsx

import React from 'react';

import  Button  from '.';

export default {
  title: 'atoms/Button',
  component: Button,
  args: {
    title: "Label",
    color:"blue"
  },
  argTypes: {
    color: {
    control: "inline-radio",
    options: ["blue", "purple"]
}}
};

const Template = (args) => <Button {... args} />

export const Default = Template.bind({});
Default.args = {
    label: "click here"
    
}