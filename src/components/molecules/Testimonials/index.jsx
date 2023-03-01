import Text from '@/components/atoms/Text'
import styles from './styles.module.scss'
import React from 'react'
import Avatar from '../Avatar'
import Rating from '@/components/atoms/Rating/Rating2'

function Testimonial({}) {
  return (
    <article className={styles.Testimonial}>
<section className={styles.Testimonial__stars}>
   <Rating precision={0.5}/>
  
</section>
<section  className={styles.Testimonial__text}>
<Text color="darkBrown" size="medium">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you. </Text>

</section>
<Avatar name="Garnet Gem" enterprise="Valtech" img="/garnet.png"></Avatar>
    </article>
  )
}

export default Testimonial