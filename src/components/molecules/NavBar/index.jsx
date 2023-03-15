import styles from "./styles.module.scss";
import React, { useState } from "react";

import { GiHamburgerMenu } from 'react-icons/gi';

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(true);

  

  return (
    <nav className={styles[`nav`]} >
      <div className={styles[`nav__internal`]}>
        <div className={styles[`nav__menu`]}>
          <ul className={styles[`nav__list`]}>

            {/* <li className={styles[`nav__item`]}>
             
                <a href="#home" className={styles[`nav__link`]}>Home</a>
              
            </li> */}
            <li className={styles[`nav__item`]}>

              <a href="#quemsomos" className={styles[`nav__link`]}>About</a>

            </li>
            <li className={styles[`nav__item`]}>

              <a href="#servicos" className={styles[`nav__link`]}>Services</a>

            </li>
            <li className={styles[`nav__item`]}>

              <a href="#clientes" className={styles[`nav__link`]}>Pricing</a>

            </li>
            <li className={styles[`nav__item`]}>

              <a href="#depoimentos" className={styles[`nav__link`]}>Blog</a>

            </li>
         
          </ul>
          <ul className={styles[`nav__list--mobile`]}>
            {showMenu ? (
               
              <button className={styles[`nav__open`]}
              onClick={() => setShowMenu(false)}> 
              <svg width="40" height="48">
              <use href="#menu" xlinkHref="#menu" />
            </svg>
            <GiHamburgerMenu></GiHamburgerMenu>
              </button>
             
            ) : (
              <>

                <div
                  className={styles[`nav__close`]}
                  onClick={() => setShowMenu(true)}
                >
                oi
                </div>
                <li className={styles[`nav__item`]}>

                  <a
                  href="#home"
                    className={styles[`nav__link`]}
                    onClick={() => setShowMenu(true)}
                  >
                    Home
                  </a>

                </li>
                <li className={styles[`nav__item`]}>

                  <a
                  href="#servicos"
                    className={styles[`nav__link`]}
                    onClick={() => setShowMenu(true)}
                  >
                    Serviços
                  </a>

                </li>
                <li className={styles[`nav__item`]}>

                  <a
                  href="#quemsomos"
                    className={styles[`nav__link`]}
                    onClick={() => setShowMenu(true)}
                  >
                    Quem Somos
                  </a>

                </li>
                <li className={styles[`nav__item`]}>

                  <a
                  href="#contato"
                    className={styles[`nav__link`]}
                    onClick={() => setShowMenu(true)}
                  >
                    Contato
                  </a>

                </li>

              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
