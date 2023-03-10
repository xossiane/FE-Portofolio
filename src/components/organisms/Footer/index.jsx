import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import styles from "./styles.module.scss";
export default function Footer() {
    const menu = ["About", "Services", "Blog", "Contact"]
    const service = ["Design", "Development", "Marketing", "See More"]
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
      <Heading level="4" color="darkBrown">
            Agency
          </Heading>
        <span className={styles.footer__content}>
        <Heading level="5" color="darkOrange">Menu</Heading>
        <div className={styles.footer__contentText}>
            {menu.map((item) => 
            
                <Text color="darkBrown">{item}</Text>
            
            )}
        </div>
        
        </span>
        <span className={styles.footer__content}>
        <Heading level="5" color="darkOrange">Service</Heading>
        <div className={styles.footer__contentText}>
            {service.map((item) => 
            
                <Text color="darkBrown">{item}</Text>
            
            )}
        </div>
        </span>
      </div>
    </footer>
  );
}
