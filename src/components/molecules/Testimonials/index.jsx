import Text from '@/components/atoms/Text'
import styles from './styles.module.scss'
import React from 'react'
import Avatar from '../Avatar'
import Rating from '@/components/atoms/Rating/Rating'

function Testimonial({text}) {
  return (
    <article className={styles.Testimonial}>
    <section className={styles.Testimonial__stars}>
   <Rating precision={0.5} calculateRating={5}/>
  
</section>
<section  className={styles.Testimonial__text}>
<Text color="darkBrown" size="medium">{text}</Text>

</section>
<Avatar name="Garnet Gem" enterprise="Valtech" img="/garnet.png"></Avatar>
    </article>
  )
}

export default Testimonial