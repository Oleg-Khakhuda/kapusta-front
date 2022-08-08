import React from 'react'
import { Modal } from '../../components/Modal/Modal'
import { Container } from '../../Utils/Container/Container'
import background from '../../assets/background.png'
import bg1 from '../../assets/bg-kapusta.svg'
import bg2 from '../../assets/bg-kapusta2.svg'
import kapusta from '../../assets/kapusta-main.svg'
import s from './Main.module.css'

const isAuth = false

export const Main = () => {
  return (
    <>
      <div className={s.container_main} style={{ backgroundImage: `url(${background})` }}>
        <Container>
          {!isAuth ? <Modal /> : <h1>Привет!</h1>}
          <div className={s.main} style={{ backgroundImage: `url(${bg1})` }}></div>
          <div className={s.main_kapusta} style={{ backgroundImage: `url(${kapusta})` }}></div>
          <div className={s.bg2} style={{ backgroundImage: `url(${bg2})` }}></div>
        </Container>
      </div>
    </>
  )
}
