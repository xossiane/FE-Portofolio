import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";

function Avatar({ name, img, enterprise }) {
  return (
    <div className={styles.Avatar}>
      <Image
        width={80}
        height={80}
        src={img}
        className={styles.Avatar__img}
        alt="avatar"
      />
      <div className={styles.Avatar__info}>
        <Heading level="3" color="darkBrown">
          {name}
        </Heading>
        <Text className={styles.Avatar__enterprise}>{enterprise}</Text>
      </div>
    </div>
  );
}

export default Avatar;
