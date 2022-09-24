import React from 'react'
import { useState } from 'react'
import { Button } from '../Button/Button'
import income from '../../assets/graph.svg'
import { Hint } from '../../Utils/Hint/Hint'
import { Calendar } from '../Date/Date'
import { ListMobile } from '../ListMobile/ListMobile'
import { ExpenseMob } from '../Expense/ExpenseMob'
import { IncomeMob } from '../Income/IncomeMob'
import s from './Main.module.css'

// import { Link } from 'react-router-dom'

export const Main = () => {
  const [Expense, setExpense] = useState(false)
  const [Income, setIncome] = useState(false)
  const [Main, setMain] = useState(true)

  const handleChangeExpense = e => {
    e.preventDefault()
    setExpense(true)
    setMain(false)
  }

  const handleChangeIncome = e => {
    e.preventDefault()
    setIncome(true)
    setMain(false)
  }

  return (
    <>
      {Expense && <ExpenseMob />}
      {Income && <IncomeMob />}
      {Main && (
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
            <li>
              <Button onClick={handleChangeExpense} className={`${s.btn} ${s.expense_btn}`}>
                ВИТРАТИ
              </Button>
            </li>
            <li>
              <Button onClick={handleChangeIncome} className={`${s.btn} ${s.income_btn}`}>
                ДОХІД
              </Button>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
