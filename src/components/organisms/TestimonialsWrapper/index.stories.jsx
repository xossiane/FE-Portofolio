import TestimonialsWrapper  from '.'

export default {
  title: 'organisms/TestimonialsWrapper',
  component: TestimonialsWrapper,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    layout: "centered"
  
  },
};


const Template = (args) => <div style={{zoom: 0.6, width: '120rem'}}><TestimonialsWrapper {... args} /></div>

export const Default = Template.bind({});
Default.args = {

};

