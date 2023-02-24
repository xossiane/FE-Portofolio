import CounterCards from '.'

  

export default {
    title: "molecules/CounterCards",
    component: CounterCards,
    /* args: {
        n: 98,
        label: "people",
        character: "%"

    } */
}

const Template = (args) => <CounterCards {...args} />;

export const Default = Template.bind({});
Default.args = {
  n: 1000,
character: "%",
  label: "Projects complete", 
};

export const NoCharacter = Template.bind({});
NoCharacter.args = {
  n: 30,
  character: "",
  label: "Projects complete", 
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  n: 30,
  character: "%",
  label: "", 
};

