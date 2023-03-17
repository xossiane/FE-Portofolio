import React from 'react'
import CounterCards from "@/components/molecules/CounterCards";
import styles from './styles.module.scss'

function CCWrapper() {
  return (
    <section className={styles.CCWrapper}>
    <CounterCards n={42} character="%" label="our counting"></CounterCards>
    <CounterCards n={73} character="+" label="agency members"></CounterCards>
    <CounterCards n={5000} label="projects complete"></CounterCards>
    
    
    

    </section>
  )
}

export default CCWrapper