import CCWrapper from "@/components/organisms/CCWrapper";
import Hero from "@/components/molecules/Hero";
import Testimonial from "@/components/molecules/Testimonials";
import TestimonialsWrapper from "@/components/organisms/TestimonialsWrapper";
import Card from "@/components/molecules/Card";


export default function Home() {
  return (
    <>
      <p>Home</p>
      <CCWrapper></CCWrapper>
      <Hero
        img="/hero.png"
        category="ABOUT"
        title="An Experience 
Design Agency"
        subtitle="Provides a full service range"
        description="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
      ></Hero>
      <Hero
        img="/hero2.png"
        category="ABOUT"
        title="An Experience 
        Webflow Expert"
        subtitle="Provides a full service range"
        description="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
        variation="variation"
      ></Hero>

     <TestimonialsWrapper /> 
     <Card name="hello world" img="/kiki.jpg"></Card>
    </>
  );
}
