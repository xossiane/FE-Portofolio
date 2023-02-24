import Text from ".";

export default {
  title: "Atoms/Text",
  component: Text,
  tags: ["autodocs"],
  args: {
    color: "black",
    size: "medium",
    children: "This is a text",
    weight: "",
  },
  argTypes: {
    color: {
      control: "inline-radio",
      options: ["black", "darkBrown", "lightOrange"]
    },
    size: {
      control: "inline-radio",
      options: ["XLarge", "large", "medium", "small", "XSmall"]
    },
    weight: {
      control: "inline-radio",
      options: ["bold", "italic", "normal"]
    }
  }
};

export const Default = {};