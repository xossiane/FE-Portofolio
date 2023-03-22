import Testimonials  from '.'
import garnet from '../../../../public/garnet.png'

export default {
  title: 'molecules/Testimonials',
  component: Testimonials,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
  
  },
};


const Template = (args) => <div style={{zoom: 0.7, width: '100rem'}}><Testimonials {... args} /></div>

export const Default = Template.bind({});
Default.args = {
 img: garnet,
        text:"A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you."
        
    
};




