import CCWrapper from "@/components/organisms/CCWrapper";
import Hero from "@/components/molecules/Hero";
import Testimonial from "@/components/molecules/Testimonials";
import TestimonialsWrapper from "@/components/organisms/TestimonialsWrapper";
import Card from "@/components/molecules/Card";
import CardsWrapper from "@/components/organisms/CardsWrapper";


export default function Home() {
  return (
    <>
      <p>Home</p>
     
      <Hero
        img="/hero.png"
        category="ABOUT"
        title="An Experience 
Design Agency"
        subtitle="Provides a full service range"
        description="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
      ></Hero>
       <CCWrapper></CCWrapper>

     <TestimonialsWrapper /> 
    <CardsWrapper></CardsWrapper>
    <Hero
        img="/hero2.png"
        category="ABOUT"
        title="An Experience 
        Webflow Expert"
        subtitle="Provides a full service range"
        description="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
        variation="variation"
      ></Hero>
    </>
  );
}
