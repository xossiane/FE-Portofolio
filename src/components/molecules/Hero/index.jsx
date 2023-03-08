import Heading from '@/components/atoms/Heading'
import Text from '@/components/atoms/Text'
import Button from '@/components/atoms/Button'
import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'
import SectionTitle from '../SectionTitle'

function Hero({category, title, subtitle, description, variation, img}) {
  const classList = [];
  
  return (
    <>
    {variation ? (
      <section  className={styles.HeroVariation}>
      
      <Image className={styles.HeroVariation__img} src={img} width="329" height="340" alt="" />
      <article className={styles.HeroVariation__info}>
      <span className={styles.HeroVariation__title}>
        <SectionTitle color="white" title="An Experience Webflow Expert" subtitle="about" isLeft={true}></SectionTitle>
  
        
      </span>
      <Text size="medium" color="offWhite" className={styles.Hero__subtitle}>{subtitle}</Text>
        <Text size="medium" color="offWhite" className={styles.Hero__description}>{description}</Text>
        <Button label="About Us" color="purple" />
        </article>
    
    </section>
    ) : (
      <section  className={styles.Hero}>
      
      <Image className={styles.Hero__img} src={img} width="329" height="340" alt="" />
      
      <article className={styles.Hero__info}>
      <span className={styles.Hero__title}>
      <SectionTitle color="darkBrown" title="An Experience Design Agency" subtitle="about" isLeft={true}></SectionTitle>
  
        
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