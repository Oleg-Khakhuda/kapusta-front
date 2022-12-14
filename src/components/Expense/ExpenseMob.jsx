import { ReactComponent as Back } from '../../assets/back.svg'
import { DropSelect } from '../Select/Select'
import options from '../../optionsExpense.json'
import { ReactComponent as Calculator } from '../../assets/calculator.svg'
import { Button } from '../Button/Button'
import s from '../Expense/ExpenseMob.module.css'

export const ExpenseMob = () => {
  return (
    <div>
      <Back className={s.back} />
      <form className={s.form}>
        <label className={s.label}>
          <input type="text" placeholder="Опис товару" className={s.input} />
        </label>

        <DropSelect options={options} />

        <div className={s.inputEnter}>
          <div className={s.enterCalc}>
            <label className={s.labelCalc}>
              <input className={s.inputCalc} type="text" placeholder="00.00 ГРН" />
            </label>
          </div>
          <div className={s.calculator}>
            <Calculator className={s.calcImg} />
          </div>
        </div>
        <ul className={s.button_bottom}>
          <li>
            <Button className={`${s.btn} ${s.expense_btn}`}>ДОДАТИ</Button>
          </li>
          <li>
            <Button className={`${s.btn} ${s.income_btn}`}>ОЧИСТИТИ</Button>
          </li>
        </ul>
      </form>
    </div>
  )
}
