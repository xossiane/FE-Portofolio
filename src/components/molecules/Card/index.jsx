import React from 'react'
import Image from "next/image";
import styles from './styles.module.scss'
import Heading from '@/components/atoms/Heading';
import Tag from '@/components/atoms/Tag';

function Card({name, img}) {
  return (
    <div className={styles.Card}>
        <section className={styles.Card__container}>
            <Image alt="image"
            className={styles.Card__img}
            src={img} width={800}
          height={600}></Image>
<span className={styles.Card__content}>
  <Tag label="label" df="df"></Tag>
<Heading level="4" align="left" color="white" pageTitle={false} format="bold" align="left">
          {name}
        </Heading>
        
</span>
        </section>
    </div>
  )
}

export default Card