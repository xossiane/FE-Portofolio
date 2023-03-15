import styles from "./styles.module.scss";
import React, { useState } from "react";

import logo from "../../../../public/logo.png"
import NavBar from "../../molecules/NavBar";
import Button from "@/components/atoms/Button";




export default function Header() {


  return (
    <header className={styles[`header`]}>
      <div className={styles[`header__internal`]}>

        <a href="#home">
          <img
            className={styles[`header__logo`]}
            src="/logo.png"
            alt="go back to homescreen page"
          />
        </a>

        <div className={styles[`header__nav`]}>
          <NavBar></NavBar>
         
        </div>
        <span className={styles[`header__nav--btn`]}><Button color="blue" label="Contact"/></span>
       
      </div>
    </header>
  );
}