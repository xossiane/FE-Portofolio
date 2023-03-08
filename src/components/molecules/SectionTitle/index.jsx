import Heading from "@/components/atoms/Heading";
import React from "react";
import styles from "./styles.module.scss";

function SectionTitle({ title, color, subtitle, isLeft = false }) {

  return (
    <>
      {isLeft ? (
        <span className={styles.SectionTitle__left}>
          <Heading level="5"  color="darkOrange" pageTitle={true}>
            {subtitle}
          </Heading>
          <Heading level="2" color={color} pageTitle={false} isLeft={true}>
            {title}
          </Heading>
        </span>
      ) : (
        <span className={styles.SectionTitle}>
          <Heading level="5" size="" color="darkOrange" isLeft={false} pageTitle={true}>
            {subtitle}
          </Heading>
          <Heading level="2" color={color} pageTitle={false}>
            {title}
          </Heading>
        </span>
      )}
    </>
  );
}

export default SectionTitle;
