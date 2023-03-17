import CCWrapper from "@/components/organisms/CCWrapper";
import Hero from "@/components/molecules/Hero";
import TestimonialsWrapper from "@/components/organisms/TestimonialsWrapper";
import CardsWrapper from "@/components/organisms/CardsWrapper";
import ArticleHero from "@/components/molecules/ArticleHero";
import styles from "./styles.module.scss"

export default function Home() {
  return (
    <div className={styles.Home}>
     
      <Hero
        img="hero"
        imgType="png"
        category="ABOUT"
        title="An Experience 
Design Agency"
        subtitle="Provides a full service range"
        description="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
      ></Hero>
       <CCWrapper></CCWrapper>
<ArticleHero title="Work Media Project" subtitle="Agency provides a full service range including technical skills, design, business understanding." desc="Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you." img="/client.png"></ArticleHero>
     <TestimonialsWrapper /> 
    <CardsWrapper></CardsWrapper>
    <Hero
        img="hero2"
        imgType="png"
        category="ABOUT"
        title="An Experience 
        Webflow Expert"
        subtitle="Provides a full service range"
        description="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
        variation="variation"
      ></Hero>

    </div>
  );
}
