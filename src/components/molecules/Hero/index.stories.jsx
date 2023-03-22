import Hero from '.';
/* import hero from '../../../../public/images/hero.png' */


export default {
        title: 'molecules/Hero',
        component: Hero,
        // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
        tags: ['autodocs'],
        parameters: {
          // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
          layout: 'fullscreen',
        },
      };

const Template = (args) => <div style={{zoom: 0.7}}><Hero {... args} /> </div>

export const Default = Template.bind({});
Default.args = {
 
        category: "ABOUT",
        title: "THIS IS A TITLE",
        description: "lorem lorem lorem lorem lorem lorem",
        variation: false,
        img: "hero",
        imgType: "png"
        
    
};

/* export const NoTitle = Template.bind({});
NoTitle.args = {
  
        category: "ABOUT",
        title: "",
        description: "lorem lorem lorem lorem lorem lorem",
        variation: false,
        img: "hero"
    
}; */


export const Variation = Template.bind({});
Variation.args = {
  
        category: "ABOUT",
        title: "THIS IS A TITLE",
        description: "lorem lorem lorem lorem lorem lorem",
        variation: true,
        img: "hero2",
        imgType: "png"
    
};



