import Card from '@/components/molecules/Card'
import SectionTitle from '@/components/molecules/SectionTitle'
import React from 'react'
import styles from './styles.module.scss'
function CardsWrapper() {
  const homePage = [{id: 0, isDefault: true, label: "Branding", title: "keyBoard", img: "/images/one.webp"}, {id: 1, label: "Design", title: "Sofa", img: "/images/two.webp"}, {id: 2, label: "Illustration", title: "Work Media", img: "/images/three.webp"}, {id: 3, label: "Motion", title: "DDDone", img: "/images/four.webp"}, {id: 4, label: "Branding", title: "HandP", img: "/images/five.webp"}]
  console.log(homePage)   
  return (
    <section className={styles.CardsWrapper__bg}>
      <SectionTitle title="Portfolio" subtitle="testimonials" color="darkBrown"></SectionTitle>
      
    <div className={`${styles.CardsWrapper__container} ${styles.CardsWrapper}`}> 
      {homePage.map((item) => (  
        
        
        <Card isDefault={item.isDefault} key={item.id} label={item.label} title={item.title} img={item.img}></Card> 
       
        )
      )}
       </div>
</section>
  )
}

export default CardsWrapper