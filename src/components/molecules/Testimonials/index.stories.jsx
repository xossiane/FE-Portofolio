import Testimonials  from '.'
import garnet from '../../../../public/garnet.png'

export default {
  title: 'molecules/Testimonials',
  component: Testimonials,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};


const Template = (args) => <Testimonials {... args} />

export const Default = Template.bind({});
Default.args = {
 
        text:"lorem lorem lorem"
        
    
};



