import React from 'react'
import logo from '../../assets/logo.svg'
import logout from '../../assets/logout.svg'
import { Container } from '../../Utils/Container/Container'
import s from './Header.module.css'

const isAuth = true

export const Header = () => {
  return (
    <Container>
      <div className={s.header}>
        <nav className={s.header_nav}>
          <a href="/">
            <img src={logo} alt="Logo" className={s.logo} />
          </a>
          {isAuth && (
            <div className={s.auth_container}>
              <div className={s.name}>U</div>
              <button className={s.button}>
                <img src={logout} alt="Logout" className={s.logout} />
              </button>
              <span className={s.user__name}>userName</span>
              <a href="/" className={s.logoutExit}>
                Выйти
              </a>
            </div>
          )}
        </nav>
      </div>
    </Container>
  )
}
