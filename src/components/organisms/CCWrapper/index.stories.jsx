import CCWrapper  from '.'

export default {
  title: 'organisms/CCWrapper',
  component: CCWrapper,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    layout: "centered"
  
  },
};


const Template = (args) => <div style={{zoom: 0.7, width: '100rem'}}><CCWrapper {... args} /></div>

export const Default = Template.bind({});
Default.args = {

};


