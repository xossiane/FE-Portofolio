import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import styles from "./styles.module.scss";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";

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
            
                <Text size="medium" color="darkBrown">{item}</Text>
            
            )}
        </div>
        
        </span>
        <span className={styles.footer__content}>
        <Heading level="5" color="darkOrange">Service</Heading>
        <div className={styles.footer__contentText}>
            {service.map((item) => 
            
                <Text size="medium" color="darkBrown">{item}</Text>
           
            )}
        </div>
        </span>
        
        <span className={styles.footer__content}>
        <span className={styles.footer__contentIcon}>
       <span className={styles.footer__iconContainer}> <BsInstagram className={styles.footer__icon}></BsInstagram></span> 
       <span className={styles.footer__iconContainer}> <BsTwitter className={styles.footer__icon}></BsTwitter></span>
       <span className={styles.footer__iconContainer}> <BsFacebook className={styles.footer__icon}></BsFacebook></span>  
  </span>
       
        </span>
        
      </div>
      <span className={styles.footer__copyright}>
      <Text color="lightBrown">Copyright © 2022 Laaqiq. All Rights Reserved.</Text> <Text>Terms of Use</Text>  <Text>Privacy Policy</Text>
      </span>
    
    </footer>
  );
}
