import React from "react";
import Text from "../Text/index";
import styles from "./styles.module.scss";

export default function Tag({ label, df, text, className }) {
  const classList = [];
  classList.push(styles[`Tag--${df}`]);
  
  classList.push(styles[`Tag--${text}`]);
  return (
    <div className={styles[`Tag`]}>
        
      <Text
        className={`${classList.join(" ")} ${className}`}
        size="small"
      >
        
        {label}
      </Text>
    </div>
  );
}