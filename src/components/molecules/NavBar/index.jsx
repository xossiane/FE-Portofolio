import styles from "./styles.module.scss";
import React, { useState, useRef, useEffect } from "react";

import { GiHamburgerMenu } from 'react-icons/gi';

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(true);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(true);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav className={styles[`nav`]} >
      <div ref={menuRef} style={{ zIndex: 2 }} className={styles[`nav__internal`]}>
        <div className={styles[`nav__menu`]}>
          <ul className={styles[`nav__list`]}>

            {/* <li className={styles[`nav__item`]}>
             
                <a href="#home" className={styles[`nav__link`]}>Home</a>
              
            </li> */}
            <li className={styles[`nav__item`]}>

              <a href="#about" className={styles[`nav__link`]}>About</a>

            </li>
            <li className={styles[`nav__item`]}>

              <a href="#services" className={styles[`nav__link`]}>Services</a>

            </li>
            <li className={styles[`nav__item`]}>

              <a href="#pricing" className={styles[`nav__link`]}>Pricing</a>

            </li>
            <li className={styles[`nav__item`]}>

              <a href="#blog" className={styles[`nav__link`]}>Blog</a>

            </li>
         
          </ul>
          <ul className={styles[`nav__list--mobile`]}>
            {showMenu ? (
               
              <button className={styles[`nav__open`]}
              onClick={() => setShowMenu(false)}> 
              <svg width="40" height="48">
              <use href="#menu" xlinkHref="#menu" />
            </svg>
              </button>
             
            ) : (
              <>

                <div
                  className={styles[`nav__close`]}
                  onClick={() => setShowMenu(true)}
                >
               <svg width="50" height="58">
              <use href="#close" xlinkHref="#close" />
            </svg>
                </div>
                
                <li className={styles[`nav__item`]}>

                  <a
                  href="#about"
                    className={styles[`nav__link`]}
                    onClick={() => setShowMenu(true)}
                  >
                    About
                  </a>

                </li>
                <li className={styles[`nav__item`]}>

                  <a
                  href="#services"
                    className={styles[`nav__link`]}
                    onClick={() => setShowMenu(true)}
                  >
                    Services
                  </a>

                </li>
                <li className={styles[`nav__item`]}>

                  <a
                  href="#pricing"
                    className={styles[`nav__link`]}
                    onClick={() => setShowMenu(true)}
                  >
                    Pricing
                  </a>

                </li>
                <li className={styles[`nav__item`]}>

                  <a
                  href="#blog"
                    className={styles[`nav__link`]}
                    onClick={() => setShowMenu(true)}
                  >
                    Blog
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
