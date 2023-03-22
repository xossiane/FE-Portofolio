import Header  from '.'

export default {
  title: 'organisms/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    layout: "centered"
  
  },
};


const Template = (args) => <div style={{zoom: 0.7, width: '100rem'}}><Header {... args} /></div>

export const Default = Template.bind({});
Default.args = {

};

