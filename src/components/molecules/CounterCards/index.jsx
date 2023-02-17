import Counter from "@/components/atoms/Counter";
import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import styles from "./styles.module.scss";

function CounterCards({ label, n, character }) {
  return (
    <span className={styles.counterCard}>
      
        <Heading
          className={styles.counterCard__number}
          level="4"
          format="bold"
          color="darkBrown"
          pageTitle={false}
        >
          <Counter n={n} />
          {character}
        </Heading>
      
      <Text size="XSmall" className={styles.counterCard__label}>
        {label}
      </Text>
    </span>
  );
}

export default CounterCards;
