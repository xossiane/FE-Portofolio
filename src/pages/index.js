import CCWrapper from "@/components/organisms/CCWrapper";
import Hero from "@/components/molecules/Hero";
import HeroWrapper from "@/components/organisms/HeroWrapper";

export default function Home() {
  return (
    <>
      <p>Home</p>
      <CCWrapper></CCWrapper>
      <Hero
        category="ABOUT"
        title="An Experience 
Design Agency"
        subtitle="Provides a full service range"
        description="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
      ></Hero>
      <Hero
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
