import React from 'react'
import styles from './styles.module.scss'
import Heading from '@/components/atoms/Heading';
import Tag from '@/components/atoms/Tag';


function Card({title, img, label, isDefault = false}) {
  return (
    
    <div className={`${styles.Card} ${styles[isDefault ? "Card--isDefault" : ""]}`}>
        <section className={styles.Card__container}>
            <img alt="image"
            className={styles.Card__img}
            src={img}></img>
<span className={styles.Card__content}>
  <Tag label={label} df="df"></Tag>
<Heading level="4" align="left" color="white" pageTitle={false} format="bold">
          {title}
        </Heading>
        
</span>
        </section>
    </div>
    
  )
}

export default Card