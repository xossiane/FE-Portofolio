import Hero from '.'
import hero from '../../../../public/images/hero@2x.png'

export default {
    title: "molecules/Hero",
    component: Hero,
   /*  args: {
        category: "ABOUT",
        title: "THIS IS A TITLE",
        description: "lorem lorem lorem lorem lorem lorem",
        variation: false,
        img: "public/hero.png"
    } */
    
}


const Template = (args) => <Hero {... args} />

export const Default = Template.bind({});
Default.args = {
 
        category: "ABOUT",
        title: "THIS IS A TITLE",
        description: "lorem lorem lorem lorem lorem lorem",
        variation: false,
        img: hero,
        
    
};

export const NoTitle = Template.bind({});
NoTitle.args = {
  
        category: "ABOUT",
        title: "",
        description: "lorem lorem lorem lorem lorem lorem",
        variation: false,
        img: hero
    
};


export const NoDesc = Template.bind({});
NoDesc.args = {
  
        category: "ABOUT",
        title: "THIS IS A TITLE",
        description: "",
        variation: false,
        img: hero
    
};

