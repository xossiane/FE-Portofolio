import Avatar  from '.'
import garnet from '../../../../public/garnet.png'

export default {
  title: 'molecules/Avatar',
  component: Avatar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};


const Template = (args) => <Avatar {... args} />

export const Default = Template.bind({});
Default.args = {
 
        name: "Garnet Gem",
        enterprise: "Valtech",
        img: garnet
        
    
};

export const NoAvatar = Template.bind({});
NoAvatar.args = {
 
        ...Default.args,
        img: ""
        
    
};

export const NoEnterprise = Template.bind({});
NoEnterprise.args = {
 
        ...Default.args,
        enterprise: ""
        
    
};