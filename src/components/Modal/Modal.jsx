import React from 'react'
import google from '../../assets/google.svg'
import bg2 from '../../assets/bg-kapusta2.svg'
import s from './Modal.module.css'

export const Modal = () => {
  return (
    <div className={s.modal}>
      <p className={s.title_text}>
        Ви можете авторизуватись за допомогою <br></br> Google Account:
      </p>
      <button className={s.button}>
        <div className={s.button_google} style={{ backgroundImage: `url(${google})` }}></div>
        <span className={s.text_button}>Google</span>
      </button>
      <p className={s.title_text}>
        Або зайти за допомогою e-mail та пароля, <br></br> попередньо зареєструвавшись:
      </p>

      <form>
        <div className={s.label_block}>
          <label htmlFor="mail" className={s.label}>
            Электронная почта:
          </label>
        </div>
        <div>
          <input type="mail" placeholder="your@email.com" id="mail" className={s.input_mail} />
        </div>
        <div className={s.label_block}>
          <label htmlFor="password" className={s.label}>
            Пароль:
          </label>
        </div>
        <div>
          <input type="password" placeholder="Пароль" id="password" className={s.input_password} />
        </div>
        <div className={s.button_block}>
          <button className={s.button_enter}>ВВІЙТИ</button>
          <button className={s.button_reg}>РЕЄСТРАЦІЯ</button>
        </div>
      </form>
    </div>
  )
}
