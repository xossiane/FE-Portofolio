import React from 'react'
import CounterCards from "@/components/molecules/CounterCards";
import styles from './styles.module.scss'

function CCWrapper() {
  return (
    <section className={styles.CCWrapper}>
    <CounterCards n={30} character="%" label="our counting"></CounterCards>
    <CounterCards n={73} character="+" label="agency members"></CounterCards>
    <CounterCards n={9000} label="projects complete"></CounterCards>
    <CounterCards n={50000} label="sad people"></CounterCards>

    </section>
  )
}

export default CCWrapper