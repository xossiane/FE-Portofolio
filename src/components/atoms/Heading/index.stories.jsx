import Heading from ".";

export default {
  title: "Atoms/Heading",
  component: Heading,
  args: {
    color: "black",
    level: "1",
    children: "Heading",
  },
  argTypes: {
    level: {
      control: "inline-radio",
      options: ["1", "2", "3", "4", "5"],
    },
    color: {
      control: "inline-radio",
      options: ["black", "darkOrange", "white", "darkBrown"],
    },
  },
};

export const Default = {};