import Counter from ".";

const number = [
    {number: 39}]

const Template = (args) => <Counter {...args} />;    



export default {
  title: "Molecules/Counter",
  component: Counter,
  args: {
    number: number,
  }
};


export const Default = Template.bind({});
Default.args = {
  n: 1000,
  /* symbol: "+",
  description: "Projects complete", */
};




