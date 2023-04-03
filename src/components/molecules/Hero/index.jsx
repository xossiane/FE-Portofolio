import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";
import SectionTitle from "../SectionTitle";

function Hero({ subtitle, description, variation, img, imgType }) {


  return (
    <>
      {variation ? (
        <section className={styles.HeroVariation}>
          <picture>
            <source
            srcSet={`images/${img}@2x.${imgType}`}
            media="(min-width: 992px)"
            alt="Hero"
            className={styles.HeroVariation__img}>
            </source>
            <img
            src={`images/${img}@2x.${imgType}`}
            className={styles.HeroVariation__img}
            alt=""
          />
          </picture>
          
          <article className={styles.HeroVariation__info}>
            <span className={styles.HeroVariation__title}>
              <SectionTitle
                color="white"
                title="An Experience Webflow Expert"
                subtitle="about"
                isLeft={true}
              ></SectionTitle>
            </span>
            <Text
              size="medium"
              color="offWhite"
              className={styles.Hero__subtitle}
            >
              {subtitle}
            </Text>
            <Text
              size="medium"
              color="offWhite"
              className={styles.Hero__description}
            >
              {description}
            </Text>
            <Button label="About Us" color="purple" />
          </article>
        </section>
      ) : (
        <section className={styles.Hero}>
          
          <picture>
            <source
            srcSet={`images/${img}@2x.${imgType}`}
            media="(min-width: 992px) 100vw"
            alt="Hero"
            className={styles.HeroVariation__img}>
            </source>
            <img
            className={styles.HeroVariation__img}
            src={`images/${img}@2x.${imgType}`}
            alt=""
          />
          </picture>

          <article className={styles.Hero__info}>
            <span className={styles.Hero__title}>
              <SectionTitle
                color="darkBrown"
                title="An Experience Design Agency"
                subtitle="about"
                isLeft={true}
              ></SectionTitle>
            </span>
            <Text
              size="medium"
              color="darkBrown"
              className={styles.Hero__subtitle}
            >
              {subtitle}
            </Text>
            <Text
              size="medium"
              color="lightBrown"
              className={styles.Hero__description}
            >
              {description}
            </Text>
            <Button label="About Us" />
          </article>
        </section>
      )}
    </>
  );
}

export default Hero;
