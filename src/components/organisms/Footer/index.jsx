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
            
                <Text key={item} size="medium" color="darkBrown">{item}</Text>
            
            )}
        </div>
        
        </span>
        <span className={styles.footer__content}>
        <Heading level="5" color="darkOrange">Service</Heading>
        <div className={styles.footer__contentText}>
            {service.map((item) => 
            
                <Text key={item} size="medium" color="darkBrown">{item}</Text>
           
            )}
        </div>
        </span>
        
        <span className={styles.footer__content}>
        <span className={styles.footer__contentIcon}>
       <a className={styles.footer__iconContainer} role="link" tabIndex={0}> <BsInstagram className={styles.footer__icon}></BsInstagram></a> 
       <a className={styles.footer__iconContainer} role="link" tabIndex={0}> <BsTwitter className={styles.footer__icon}></BsTwitter></a>
       <a className={styles.footer__iconContainer} role="link" tabIndex={0}> <BsFacebook className={styles.footer__icon}></BsFacebook></a>  
  </span>
       
        </span>
        
      </div>
      <span className={styles.footer__copyright}>
        <span className={styles.footer__copyrightHR}></span>
      <Text color="lightBrown">Copyright © 2022 Laaqiq. All Rights Reserved.</Text> 
      <span className={styles.footer__copyrightContent}>
        
      <Text>Terms of Use</Text>  <Text>Privacy Policy</Text>
      </span>
    
      </span>
    
    </footer>
  );
}
