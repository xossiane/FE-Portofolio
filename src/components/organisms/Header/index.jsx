import styles from "./styles.module.scss";
import React, { useState } from "react";

import logo from "../../../../public/logo.png"
import NavBar from "../../molecules/NavBar";




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
      </div>
    </header>
  );
}