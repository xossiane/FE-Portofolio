import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import React from "react";
import styles from "./styles.module.scss";

function ArticleHero({ title, subtitle, desc, img }) {
  const category = [
    { name: "Art Direction" },
    { name: "User Interface" },
    { name: "Branding Strategy" },
    { name: "Print Design" },
    { name: "3D Render" },
  ];
  return (
    <div className={styles.ArticleHero}>
      <Heading level="2" pageTitle={false} color="darkBrown" align="left">
        {title}
      </Heading>
      <Text className={styles.ArticleHero__title} color="darkBrown">
        {subtitle}
      </Text>
      <Text className={styles.ArticleHero__title} color="lightBrown">
        {desc}
      </Text>
      <div className={styles.ArticleHero__content}>
        <span className={styles.ArticleHero__category}>
          <Heading level="5" color="darkOrange" align="left">
            CATEGORY
          </Heading>
          {category.map((item) => (
            <Text key={item.name} size="small" color="darkBrown">
              {item.name}
            </Text>
          ))}
        </span>
        <div className={styles.ArticleHero__client}>
          <Heading level="5" color="darkOrange" align="left">
            CLIENT
          </Heading>
          <img src={img}  className={styles.ArticleHero__img} alt="img" />
        </div>

        <span className={styles.ArticleHero__date}>
          <Heading level="5" color="darkOrange" align="left">
            DATE
          </Heading>
          <Text color="darkBrown" size="small">
            25. FEB. 23
          </Text>
        </span>
      </div>
    </div>
  );
}

export default ArticleHero;
