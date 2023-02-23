import Text from ".";

export default {
  title: "Atoms/Text",
  component: Text,
  args: {
    color: "black",
    size: "medium",
    children: "This is a text",
    weight: "",
  },
  argTypes: {
    color: {
      control: "inline-radio",
      options: ["black"]
    },
    size: {
      control: "inline-radio",
      options: ["XXLarge", "XLarge", "large", "medium", "small", "XSmall"]
    },
    weight: {
      control: "inline-radio",
      options: ["bold", "italic", ""]
    }
  }
};

export const Default = {};