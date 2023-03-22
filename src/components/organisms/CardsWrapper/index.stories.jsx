import CardsWrapper  from '.'

export default {
  title: 'organisms/CardsWrapper',
  component: CardsWrapper,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    layout: "centered"
  
  },
};


const Template = (args) => <div style={{zoom: 0.4, width: '160rem'}}><CardsWrapper {... args} /></div>

export const Default = Template.bind({});
Default.args = {

};


const Template2 = (args) => <div style={{zoom: 0.6, width: '70rem'}}><CardsWrapper {... args} /></div>

export const Mobile = Template2.bind({});
Mobile.args = {
grid: {
    columns: 1
}
};
