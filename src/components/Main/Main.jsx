import React from 'react'
import { Button } from '../Button/Button'
import income from '../../assets/graph.svg'
import { Hint } from '../../Utils/Hint/Hint'
import { Calendar } from '../Date/Date'
import { ListMobile } from '../ListMobile/ListMobile'
import s from './Main.module.css'

import { useState } from 'react'

// import { Link } from 'react-router-dom'

export const Main = () => {
  return (
    <div className={s.main}>
      <div className={s.blockIncome}>
        <a className={s.report} href="/reports">
          Перейти до звітів
          <div className={s.income} style={{ backgroundImage: `url(${income})` }}></div>
        </a>
      </div>

      <h3 className={s.balans_title}>Баланс:</h3>
      <div>
        <form type="submit" className={s.enter}>
          <input type="text" placeholder="00.00 грн" id="balance" className={s.input_balance} />
          <Button className={s.button}>підтвердити</Button>
        </form>
      </div>

      {/* <Hint /> */}

      <Calendar />

      <ListMobile />

      <ul className={s.button_bottom}>
        <li className={s.item1}>
          <Button className={`${s.btn} ${s.expense_btn}`}>ВИТРАТИ</Button>
        </li>
        <li className={s.item2}>
          <Button className={`${s.btn} ${s.income_btn}`}>ДОХІД</Button>
        </li>
      </ul>
    </div>
  )
}
