import Heading from '@/components/atoms/Heading'

import Testimonials from '@/components/molecules/Testimonials'
import React from 'react'
import styles from './styles.module.scss'

function TestimonialsWrapper() {
  return (
    <span className={styles.TestimonialsWrapper}>
      <Heading level="5" size="" color="darkOrange" pageTitle={true}>Testimonials</Heading>
      
      <Heading level="2" color="white" pageTitle={false} >What My 
Clients Saying</Heading>
          <span className={styles.TestimonialsWrapper__content}>
          <Testimonials text={"1 A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you."}/>
        <Testimonials text={"2 Provide your business with a variety of digital solutions to promote your product or service online."}/>
        <Testimonials text={"3 Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety."}/>
        <Testimonials text={"4 Promote your product or service online and help you hit your marketing goals and grow your business."}/>
          </span>
  
        
    </span>
  )
}

export default TestimonialsWrapper