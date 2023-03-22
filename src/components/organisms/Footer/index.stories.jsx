import Footer  from '.'

export default {
  title: 'organisms/Footer',
  component: Footer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    layout: "centered"
  
  },
};


const Template = (args) => <div style={{zoom: 0.4, width: '160rem'}}><Footer {... args} /></div>

export const Default = Template.bind({});
Default.args = {

};

