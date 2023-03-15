import styles from "./styles.module.scss";
import React, { useState } from "react";



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

              <a href="#quemsomos" className={styles[`nav__link`]}>Quem somos</a>

            </li>
            <li className={styles[`nav__item`]}>

              <a href="#servicos" className={styles[`nav__link`]}>Serviços</a>

            </li>
            <li className={styles[`nav__item`]}>

              <a href="#clientes" className={styles[`nav__link`]}>Clientes</a>

            </li>
            <li className={styles[`nav__item`]}>

              <a href="#depoimentos" className={styles[`nav__link`]}>Depoimentos</a>

            </li>
            <li className={styles[`nav__item`]}>

              <a href="#responsabilidadesocial" className={styles[`nav__link`]}>Responsabilidade Social</a>

            </li>
            <li className={styles[`nav__item`]}>

              <a href="#contato" className={styles[`nav__link`]}>Contato</a>

            </li>
          </ul>
          <ul className={styles[`nav__list--mobile`]}>
            {showMenu ? (
              <div className={styles[`nav__open`]}
              onClick={() => setShowMenu(false)}> oi
              </div>
             
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
