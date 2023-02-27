import Heading from '@/components/atoms/Heading'
import Text from '@/components/atoms/Text'
import Button from '@/components/atoms/Button'
import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'

function Hero({category, title, subtitle, description, variation, className}) {
  const classList = [];
  
  return (
    <>
    {variation ? (
      <section  className={styles.HeroVariation}>
      
      <Image className={styles.HeroVariation__img} src="/hero2.png" width="329" height="340" alt="" />
      
      <article className={styles.HeroVariation__info}>
      <Text className={styles.HeroVariation__category} size="medium" color="darkOrange" >{category}</Text>
      <span className={styles.HeroVariation__title}>
      <Heading
          level="3"
          format="bold"
          color="white"
          pageTitle={false}
        >
          {title}
        </Heading>
        
      </span>
      <Text size="medium" color="offWhite" className={styles.Hero__subtitle}>{subtitle}</Text>
        <Text size="medium" color="offWhite" className={styles.Hero__description}>{description}</Text>
        <Button label="About Us" color="purple" />
        </article>
    
    </section>
    ) : (
      <section  className={styles.Hero}>
      
      <Image className={styles.Hero__img} src="/hero.png" width="329" height="340" alt="" />
      
      <article className={styles.Hero__info}>
      <Text className={styles.Hero__category} size="medium" color="darkOrange" >{category}</Text>
      <span className={styles.Hero__title}>
      <Heading
          level="3"
          format="bold"
          color="darkBrown"
          pageTitle={false}
        >
          {title}
        </Heading>
        
      </span>
      <Text size="medium" color="darkBrown" className={styles.Hero__subtitle}>{subtitle}</Text>
        <Text size="medium" color="lightBrown" className={styles.Hero__description}>{description}</Text>
        <Button label="About Us"/>
        </article>
    </section>
    )
  }
    
  )
 </>)}


export default Hero